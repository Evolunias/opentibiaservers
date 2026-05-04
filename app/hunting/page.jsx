'use client';

export const dynamic = 'force-dynamic';

import { Sword, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HuntingPage() {
  const huntingZones = [
    {
      level: "200-600",
      creatures: ["Hero", "Necromancer", "Fury", "Hellspawn"],
      noBotBonus: "+30% EXP, +30% Loot",
      noBotFeatures: "2x monster density, expanded room layouts",
      difficulty: "Beginner to Intermediate"
    },
    {
      level: "600-1200",
      creatures: ["Ghastly Dragon", "Grim Reaper", "Spidris", "Mercenary", "Cursed Ape", "Braindeath"],
      noBotBonus: "+30% EXP, +30% Loot",
      noBotFeatures: "2x monster density, expanded room layouts",
      difficulty: "Intermediate to Advanced"
    },
    {
      level: "1200-1800",
      creatures: ["Vexclaw", "Defiler", "Demon", "Dark Sorcerer", "Destroyer"],
      noBotBonus: "+30% EXP, +30% Loot",
      noBotFeatures: "2x monster density, expanded room layouts",
      difficulty: "Advanced to Expert"
    },
    {
      level: "1800+",
      creatures: ["Nexweaver", "Metal Gargoyle", "Spiky Carnivore", "Gryphon", "Golden Dragon"],
      noBotBonus: "+30% EXP, +30% Loot",
      noBotFeatures: "2x monster density, expanded room layouts",
      difficulty: "Expert to Legendary"
    }
  ];

  const huntingMechanics = [
    {
      title: "No-Bot Spawn System",
      description: "Choose between Normal and No-Bot spawn when entering a hunting area",
      benefit: "+30% Experience & +30% Loot",
      requirement: "Unlocked by choosing 'No-Bot Spawn'"
    },
    {
      title: "EXP Scaling System",
      description: "Experience gained depends on level difference between you and the monster",
      scales: "50% minimum (if higher level) to 120% maximum (if monster higher)",
      note: "Encourages appropriate-level hunting"
    },
    {
      title: "Boosted Monsters",
      description: "One monster type is boosted daily, rotating at server save",
      bonus: "Increased EXP & loot drop chance",
      note: "Login message shows the daily boosted creature"
    },
    {
      title: "Monster Skull Tokens",
      description: "Defeated monsters have 50% chance to drop tokens",
      use: "Used to enter Challenge Rooms (requires 10 tokens)",
      note: "Essential for dungeon progression"
    }
  ];

  const huntingTips = [
    "Always check the daily boosted monster upon login",
    "Use no-bot spawns for +30% bonus to both EXP and loot",
    "Collect Monster Skull Tokens for Challenge Room entry",
    "Farm level-appropriate zones for optimal EXP rates",
    "Group hunting provides shared EXP benefits"
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Experience Farming</span>
          <h1>Hunting Grounds</h1>
          <p>
            Explore organized hunting zones by level range. Master the no-bot spawn system, track boosted monsters, and maximize your experience gains.
          </p>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Hunting Features</span>
            <h2>Key Systems</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                No-Bot Spawn
              </span>
              <strong style={{ color: 'var(--gold)' }}>+30% EXP & Loot</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Monster Density
              </span>
              <strong style={{ color: 'var(--gold)' }}>2x with no-bot</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Daily Boosts
              </span>
              <strong style={{ color: 'var(--gold)' }}>Rotating monsters</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Token Drops
              </span>
              <strong style={{ color: 'var(--gold)' }}>50% spawn chance</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Zones</span>
            <h2>Hunting Areas by Level</h2>
            <p>Four main hunting zones organized by player level with corresponding creatures.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          {huntingZones.map((zone) => (
            <article key={zone.level} className="panel" style={{ padding: '20px', borderRadius: '16px' }}>
              <div style={{ marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{
                    padding: '8px 12px',
                    background: 'rgba(99, 102, 241, 0.2)',
                    borderRadius: '6px',
                    borderLeft: '3px solid #6366f1'
                  }}>
                    <strong style={{ color: '#6366f1' }}>Level {zone.level}</strong>
                  </div>
                  <span className="chip" style={{
                    backgroundColor: '#87a07d' + '20',
                    borderColor: '#87a07d' + '40',
                    color: '#87a07d'
                  }}>
                    {zone.difficulty}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Creatures
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {zone.creatures.map((creature) => (
                      <span key={creature} style={{
                        padding: '4px 12px',
                        background: 'rgba(251, 191, 36, 0.1)',
                        borderRadius: '4px',
                        fontSize: '0.85rem'
                      }}>
                        {creature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'grid', gap: '12px' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    No-Bot Spawn Bonus
                  </span>
                  <strong style={{ color: 'var(--gold)' }}>{zone.noBotBonus}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Features
                  </span>
                  <p style={{ margin: '0', fontSize: '0.9rem' }}>{zone.noBotFeatures}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Systems</span>
            <h2>Hunting Mechanics</h2>
            <p>Core systems that affect your hunting experience and rewards.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {huntingMechanics.map((mechanic) => (
            <article key={mechanic.title} className="panel" style={{ padding: '20px', borderRadius: '16px' }}>
              <h3 style={{ margin: '0 0 12px 0' }}>{mechanic.title}</h3>
              <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {mechanic.description}
              </p>

              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)', display: 'grid', gap: '6px' }}>
                {mechanic.benefit && (
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Benefit</span>
                    <p style={{ margin: '0', color: 'var(--gold)', fontWeight: 'bold' }}>
                      {mechanic.benefit}
                    </p>
                  </div>
                )}
                {mechanic.scales && (
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Scaling</span>
                    <p style={{ margin: '0', fontSize: '0.85rem' }}>{mechanic.scales}</p>
                  </div>
                )}
                {mechanic.use && (
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Use</span>
                    <p style={{ margin: '0', fontSize: '0.85rem' }}>{mechanic.use}</p>
                  </div>
                )}
                {mechanic.bonus && (
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Bonus</span>
                    <p style={{ margin: '0', fontSize: '0.85rem' }}>{mechanic.bonus}</p>
                  </div>
                )}
                {mechanic.requirement && (
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Requirement</span>
                    <p style={{ margin: '0', fontSize: '0.85rem' }}>{mechanic.requirement}</p>
                  </div>
                )}
                {mechanic.note && (
                  <p style={{ margin: '6px 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {mechanic.note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="panel focus-panel">
          <div>
            <span className="eyebrow">Guide</span>
            <h2>Hunting Tips & Strategies</h2>
            <p>
              Maximize your hunting efficiency and earnings with these proven strategies and tips.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
            {huntingTips.map((tip, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'start' }}>
                <Zap style={{ color: 'var(--gold)', width: '20px', height: '20px', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ margin: '0', color: 'var(--text-muted)' }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
