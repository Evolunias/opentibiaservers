'use client';

import { useState, useMemo } from 'react';

export default function ExperienceSharingPage() {
  const [baseXp, setBaseXp] = useState(1000);
  const [partySize, setPartySize] = useState(2);
  const [hasEliteKnight, setHasEliteKnight] = useState(false);

  // Calculate XP breakdown
  const xpCalculation = useMemo(() => {
    // Base 30% bonus for party sharing
    let totalXp = baseXp * 1.30;

    // Add 20% extra XP for each additional player (beyond the first)
    if (partySize > 1) {
      totalXp += baseXp * (0.20 * (partySize - 1));
    }

    // Add 25% extra if Elite Knight is in party
    if (hasEliteKnight) {
      totalXp += baseXp * 0.25;
    }

    // Calculate per-player XP
    const perPlayerXp = totalXp / partySize;

    // Calculate bonuses
    const baseBonus = baseXp * 0.30;
    const additionalPlayerBonus = baseXp * (0.20 * Math.max(0, partySize - 1));
    const ekBonus = hasEliteKnight ? baseXp * 0.25 : 0;

    return {
      baseXp,
      totalBonus: baseBonus + additionalPlayerBonus + ekBonus,
      totalXp: Math.round(totalXp),
      perPlayerXp: Math.round(perPlayerXp),
      baseBonus: Math.round(baseBonus),
      additionalPlayerBonus: Math.round(additionalPlayerBonus),
      ekBonus: Math.round(ekBonus),
      singlePlayerXp: baseXp
    };
  }, [baseXp, partySize, hasEliteKnight]);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Progression System</span>
          <h1>Experience Sharing Guide</h1>
          <p>
            Understanding how experience works in parties is crucial for efficient leveling. Learn how party bonuses, additional players, and Elite Knights increase your total experience gains when hunting together.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ display: 'block', fontSize: '1.3rem' }}>+30%</strong>
              <span style={{ color: 'var(--text-muted)' }}>Base Bonus</span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.3rem' }}>+20%</strong>
              <span style={{ color: 'var(--text-muted)' }}>Per Extra Player</span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.3rem' }}>+25%</strong>
              <span style={{ color: 'var(--text-muted)' }}>Elite Knight Bonus</span>
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '1.3rem' }}>Scaled</strong>
              <span style={{ color: 'var(--text-muted)' }}>Even Distribution</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Key Facts</span>
            <h2>Quick Reference</h2>
          </div>

          <div style={{ display: 'grid', gap: '10px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Party Bonus</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>30% Flat Boost</div>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Scaling</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>Splits Evenly</div>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Max Team Size</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>No Limit</div>
            </div>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>EK Bonus</span>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>+25% Extra</div>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section">
        {/* Section 1: Base Party Bonus */}
        <div style={{ display: 'grid', gap: '24px' }}>
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '16px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2rem' }}>🎯</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '1.3rem' }}>
                  Foundation: The Base Party Bonus
                </h2>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  When you form a party with other players, the entire party gains a fundamental experience bonus as a reward for cooperation.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)', marginBottom: '16px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px' }}>
                Base Party Bonus: +30% Experience
              </div>
              <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.5' }}>
                Every monster defeated by a party grants 30% additional experience on top of the base monster experience. This bonus applies regardless of party size and is split equally among all members.
              </p>
            </div>

            <div style={{ paddingLeft: '16px', borderLeft: '1px solid var(--line)' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem' }}>Example: Two-Player Party</h3>
              <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <div>Monster Base XP: <span style={{ fontWeight: '700' }}>1,000 XP</span></div>
                <div>Party Bonus Applied: <span style={{ fontWeight: '700' }}>1,000 × 1.30 = 1,300 XP</span></div>
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                  <div>Split Between 2 Players:</div>
                  <div>Each Player Gets: <span style={{ fontWeight: '700' }}>1,300 ÷ 2 = 650 XP</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Additional Players */}
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '16px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2rem' }}>👥</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '1.3rem' }}>
                  Team Scaling: Bonus Per Additional Player
                </h2>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Evolisca rewards teamwork even more heavily as your party grows. Each additional member contributes extra experience to the shared pool.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)', marginBottom: '16px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px' }}>
                Scaling Bonus: +20% Per Additional Player
              </div>
              <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.5' }}>
                For each member added to the party beyond the first player, an extra 20% of the monster's base experience is added to the total pool to be distributed among all members.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '12px' }}>
              {[2, 3, 4, 5].map((players) => {
                const extraPlayers = players - 1;
                const additionalBonus = 20 * extraPlayers;
                const totalBonus = 30 + additionalBonus;
                const perPlayer = (1 + totalBonus / 100) / players;
                return (
                  <div key={players} style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>{players}-Player Party</span>
                        <div style={{ fontWeight: '700', marginTop: '4px', fontSize: '1rem' }}>
                          Total Bonus: {totalBonus}% ({30}% base + {additionalBonus}% scaling)
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', minWidth: '120px' }}>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Per Player</div>
                        <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>
                          {Math.round(perPlayer * 100)}% of Base
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Elite Knight Bonus */}
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '16px', marginBottom: '16px' }}>
              <span style={{ fontSize: '2rem' }}>⚔️</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '1.3rem' }}>
                  Elite Knight Blessing: Premium Party Bonus
                </h2>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Elite Knights are the premier warriors of Evolisca. Having one in your party provides a significant additional experience boost to all members.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)', marginBottom: '16px' }}>
              <div style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '8px' }}>
                Elite Knight Bonus: +25% Experience
              </div>
              <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.5' }}>
                When an Elite Knight is present in the party, an additional 25% of the monster's base experience is added to the total pool. This bonus stacks multiplicatively with all other bonuses and applies to all party members equally.
              </p>
            </div>

            <div style={{ paddingLeft: '16px', borderLeft: '1px solid var(--line)' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem' }}>Example: Party with Elite Knight</h3>
              <div style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.9rem' }}>
                <div>Monster Base XP: <span style={{ fontWeight: '700' }}>1,000 XP</span></div>
                <div style={{ marginTop: '12px' }}>
                  <div>Base Party Bonus:</div>
                  <div>1,000 × 1.30 = <span style={{ fontWeight: '700' }}>1,300 XP</span></div>
                </div>
                <div style={{ marginTop: '8px' }}>
                  <div>Elite Knight Bonus:</div>
                  <div>1,000 × 0.25 = <span style={{ fontWeight: '700' }}>250 XP</span></div>
                </div>
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                  <div>Total XP Pool:</div>
                  <div>1,300 + 250 = <span style={{ fontWeight: '700' }}>1,550 XP</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Interactive Calculator */}
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <h2 style={{ margin: '0 0 20px 0', fontSize: '1.3rem' }}>
              Interactive XP Calculator
            </h2>

            <div style={{ display: 'grid', gap: '20px' }}>
              {/* Base XP Input */}
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Monster Base XP (try different values)
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={baseXp}
                  onChange={(e) => setBaseXp(parseInt(e.target.value))}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', color: 'var(--text)' }}>
                  <span>100</span>
                  <input
                    type="number"
                    min="100"
                    max="5000"
                    value={baseXp}
                    onChange={(e) => setBaseXp(parseInt(e.target.value) || 0)}
                    style={{
                      width: '100px',
                      padding: '6px 8px',
                      borderRadius: '6px',
                      border: '1px solid var(--line)',
                      background: 'var(--bg-elevated)',
                      color: 'var(--text)',
                      textAlign: 'center',
                      fontWeight: '700'
                    }}
                  />
                  <span>5000</span>
                </div>
              </div>

              {/* Party Size Input */}
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Party Size
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((size) => (
                    <button
                      key={size}
                      onClick={() => setPartySize(size)}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--line)',
                        background: partySize === size ? 'var(--bg-soft)' : 'transparent',
                        color: 'var(--text)',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => {
                        if (partySize !== size) {
                          e.currentTarget.style.background = 'var(--bg-soft)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (partySize !== size) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Elite Knight Toggle */}
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Party Composition
                </label>
                <button
                  onClick={() => setHasEliteKnight(!hasEliteKnight)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '1px solid var(--line)',
                    background: hasEliteKnight ? 'var(--bg-soft)' : 'transparent',
                    color: 'var(--text)',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    width: '100%',
                    fontSize: '0.95rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-soft)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = hasEliteKnight ? 'var(--bg-soft)' : 'transparent';
                  }}
                >
                  {hasEliteKnight ? '⚔️ Elite Knight Present (+25% XP)' : '👥 No Elite Knight'}
                </button>
              </div>
            </div>

            {/* Results */}
            <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '1.1rem' }}>
                Results
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    Total Party XP
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                    {xpCalculation.totalXp.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    +{xpCalculation.totalBonus.toLocaleString()} XP bonus
                  </div>
                </div>

                <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    XP Per Player
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                    {xpCalculation.perPlayerXp.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {partySize} players share {Math.round((xpCalculation.perPlayerXp / xpCalculation.singlePlayerXp) * 100)}% each
                  </div>
                </div>

                <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
                    Solo XP (No Party)
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                    {xpCalculation.singlePlayerXp.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    No bonuses applied
                  </div>
                </div>
              </div>

              {/* Bonus Breakdown */}
              {(xpCalculation.baseBonus > 0 || xpCalculation.additionalPlayerBonus > 0 || xpCalculation.ekBonus > 0) && (
                <div style={{ marginTop: '16px', padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600', marginBottom: '12px' }}>
                    Bonus Breakdown:
                  </div>
                  <div style={{ display: 'grid', gap: '8px', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Base Party Bonus (30%):</span>
                      <span style={{ fontWeight: '700' }}>+{xpCalculation.baseBonus.toLocaleString()} XP</span>
                    </div>
                    {xpCalculation.additionalPlayerBonus > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Extra Players Bonus ({partySize - 1} × 20%):</span>
                        <span style={{ fontWeight: '700' }}>+{xpCalculation.additionalPlayerBonus.toLocaleString()} XP</span>
                      </div>
                    )}
                    {xpCalculation.ekBonus > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Elite Knight Bonus (25%):</span>
                        <span style={{ fontWeight: '700' }}>+{xpCalculation.ekBonus.toLocaleString()} XP</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 5: Strategy Tips */}
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
              <span style={{ fontSize: '2rem' }}>💡</span>
              <div style={{ flex: 1 }}>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem' }}>
                  Optimization Tips & Strategies
                </h2>

                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>
                      📊 Growing Returns with More Players
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      While your XP per player decreases as the party grows, the total pool increases significantly. A 3-player party gains 70% total bonus, while a 5-player party gains 110% bonus—making large groups more efficient when hunting challenging monsters.
                    </p>
                  </div>

                  <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>
                      ⚔️ Elite Knight Impact
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      An Elite Knight in your party provides a flat 25% bonus to all members, making them invaluable in organized hunting groups. This bonus applies equally regardless of party size, making EK-led parties exceptionally efficient.
                    </p>
                  </div>

                  <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>
                      🎯 Breaking Even Point
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      With a 2-player party, each member gets 65% of solo XP. As you add more members, this percentage changes based on hunting efficiency and monster difficulty—often making 4-5 player groups optimal for balanced progression.
                    </p>
                  </div>

                  <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
                    <strong style={{ display: 'block', marginBottom: '4px' }}>
                      🚀 Maximize with Synergy
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      Combine party bonuses with Elite Knights for maximum XP gains. Consider party composition and complementary abilities—stronger parties defeat harder monsters faster, multiplying your earning potential beyond the raw XP calculation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Summary Table */}
          <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
            <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem' }}>
              Quick Reference Table
            </h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--line)' }}>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: '600' }}>Scenario</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Total Bonus</th>
                    <th style={{ padding: '12px', textAlign: 'center', fontWeight: '600' }}>Per Player (1000 XP base)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)' }}>Solo Hunt</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>0%</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>1,000 XP</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)' }}>2-Player Party</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>30%</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>650 XP</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)' }}>3-Player Party</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>50%</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>500 XP</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)' }}>4-Player Party</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>70%</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>425 XP</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)' }}>5-Player Party</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>110%</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>367 XP</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)' }}>Any Party + Elite Knight</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>+25% Bonus</td>
                    <td style={{ padding: '12px', textAlign: 'center', color: 'var(--text)', fontWeight: '700' }}>Add 250 XP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
