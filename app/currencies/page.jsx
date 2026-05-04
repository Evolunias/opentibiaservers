'use client';

export const dynamic = 'force-dynamic';

import { Trophy, Zap, Gift } from 'lucide-react';
import Link from 'next/link';

export default function CurrenciesPage() {
  const currencies = [
    {
      name: "Evolisca Tokens",
      icon: Trophy,
      description: "Premium currency for account enhancements",
      uses: ["Upgrade removal (1 token per point)", "Buff purchases", "Special items"],
      obtainedFrom: "Boss drops, quest rewards, purchases",
      tradeable: true,
      bankable: true,
      color: "#fbbf24"
    },
    {
      name: "Task Points",
      icon: Zap,
      description: "Earned from quests and tasks",
      uses: ["Daily boss charges (30 Task Points each)", "NPC services"],
      obtainedFrom: "Daily quests, task completion",
      tradeable: false,
      bankable: true,
      color: "#6366f1"
    },
    {
      name: "Event Tokens",
      icon: Gift,
      description: "Special currency for events and cosmetics",
      uses: ["Event shop purchases", "Cosmetic items", "Bounce Stone Remover"],
      obtainedFrom: "Event participation, event bosses",
      tradeable: true,
      bankable: true,
      color: "#4caf50"
    },
    {
      name: "Gold Tokens",
      icon: Zap,
      description: "Trading and transaction currency",
      uses: ["Weekly boss access", "Player trades", "NPC sales"],
      obtainedFrom: "Monster drops, boss rewards, trades",
      tradeable: true,
      bankable: true,
      color: "#ff9800"
    },
    {
      name: "Star Coins",
      icon: Trophy,
      description: "Hard currency for large purchases",
      uses: ["Weekly boss entry", "High-value NPC items"],
      obtainedFrom: "Boss drops, rare quest rewards",
      tradeable: true,
      bankable: true,
      color: "#e91e63"
    },
    {
      name: "Gold Nuggets",
      icon: Zap,
      description: "Crafting and trade material",
      uses: ["Weekly boss entry", "Crafting recipes"],
      obtainedFrom: "Creature drops, mining/gathering",
      tradeable: true,
      bankable: true,
      color: "#8bc34a"
    }
  ];

  const specialItems = [
    {
      name: "Monster Skull Token",
      description: "Dropped by monsters (50% chance)",
      use: "Challenge Room entry (10 tokens required)",
      rarity: "Common drop"
    },
    {
      name: "Talent Token",
      description: "Used to reset talent distribution",
      use: "Reset talents on demand",
      rarity: "Quest reward or purchase"
    },
    {
      name: "Talent Page Parchment",
      description: "Unlock second talent page",
      use: "Unlock Talent Page 2",
      rarity: "One-time purchase (1,000 coins)"
    },
    {
      name: "Spawn Parchment",
      description: "Trigger boss encounters",
      use: "Summon boss with 20% spawn chance, Cooldown: 3 hours",
      rarity: "Purchasable item"
    },
    {
      name: "Revive Doll",
      description: "Resurrection item",
      use: "Revive on death",
      rarity: "Premium (3,000 Evolisca Tokens)"
    },
    {
      name: "EXP Restore Box",
      description: "Recover lost experience after death",
      use: "Restore 25% of lost EXP",
      rarity: "Automatic on death"
    }
  ];

  const buffs = [
    {
      name: "Damage Buff",
      duration: "1 hour",
      cooldown: "2 hours",
      cost: "Evolisca Tokens",
      effect: "Increase select damage types"
    },
    {
      name: "Reduction Buff",
      duration: "1 hour",
      cooldown: "2 hours",
      cost: "Evolisca Tokens",
      effect: "Increase damage reduction"
    },
    {
      name: "Skills Buff",
      duration: "1 hour",
      cooldown: "2 hours",
      cost: "Evolisca Tokens",
      effect: "Boost skill training rates"
    }
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Economy System</span>
          <h1>Currencies & Tokens</h1>
          <p>
            Evolisca features a complex economy with multiple currencies, tokens, and special items. Learn how to earn, trade, and spend them wisely.
          </p>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Currency Types</span>
            <h2>Six Main Currencies</h2>
          </div>

          <div className="start-list">
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Evolisca Tokens</strong> - Premium currency</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Task Points</strong> - Quest rewards</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Event Tokens</strong> - Event rewards</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Gold Tokens</strong> - Trading currency</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Main Currencies</span>
            <h2>Currency Types & Uses</h2>
            <p>Six primary currencies with different acquisition methods and uses.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {currencies.map((currency) => {
            const Icon = currency.icon;
            return (
              <article key={currency.name} className="panel" style={{ padding: '20px', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <Icon className="h-6 w-6" />
                  <h3 style={{ margin: '0' }}>{currency.name}</h3>
                </div>
                <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {currency.description}
                </p>

                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)', display: 'grid', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Uses</span>
                    <ul style={{ margin: '6px 0 0 16px', fontSize: '0.9rem', color: 'var(--text)', padding: '0' }}>
                      {currency.uses.map((use) => (
                        <li key={use}>{use}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Obtained From</span>
                    <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem' }}>{currency.obtainedFrom}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                    {currency.tradeable && (
                      <span className="chip" style={{
                        fontSize: '0.8rem'
                      }}>
                        Tradeable
                      </span>
                    )}
                    {currency.bankable && (
                      <span className="chip" style={{
                        fontSize: '0.8rem'
                      }}>
                        Bankable
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Special Items</span>
            <h2>Tokens & Special Items</h2>
            <p>Unique items with specific purposes in the game economy.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '12px' }}>
          {specialItems.map((item) => (
            <article key={item.name} className="panel" style={{
              padding: '16px 18px',
              borderRadius: '12px',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '16px',
              alignItems: 'start'
            }}>
              <div>
                <strong style={{ display: 'block', marginBottom: '4px' }}>{item.name}</strong>
                <p style={{ margin: '0 0 8px 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {item.description}
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Use: {item.use}
                </span>
              </div>
              <span className="chip" style={{
                whiteSpace: 'nowrap'
              }}>
                {item.rarity}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Enhancements</span>
            <h2>Buff System</h2>
            <p>Temporary buffs purchased with Evolisca Tokens to boost your power.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
          {buffs.map((buff) => (
            <article key={buff.name} className="panel" style={{ padding: '16px', borderRadius: '12px' }}>
              <h3 style={{ margin: '0 0 12px 0' }}>{buff.name}</h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Duration</span>
                  <p style={{ margin: '0', fontSize: '0.9rem' }}>{buff.duration}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cooldown</span>
                  <p style={{ margin: '0', fontSize: '0.9rem' }}>{buff.cooldown}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cost</span>
                  <p style={{ margin: '0', fontSize: '0.9rem' }}>{buff.cost}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Effect</span>
                  <p style={{ margin: '0', fontSize: '0.9rem' }}>{buff.effect}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
