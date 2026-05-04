'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function ServerInfoPage() {
  const serverSpecs = {
    name: 'Evolisca: The Eternal Realms',
    website: 'https://evolisca.com',
    address: 'evolisca.com',
    port: 7171,
    client: '8.60 (Custom)',
    mechanics: 'Evo 860 Mechanics',
    region: 'Germany',
    online: '24/7',
    world_type: 'Open PvP',
  };

  const rates = [
    { category: 'Experience', value: 'x1 (Stages)', description: 'Level-based experience scaling' },
    { category: 'Magic Level', value: 'x5', description: 'Faster magic skill progression' },
    { category: 'Skills (Distance/Melee)', value: 'x10', description: 'Faster skill training' },
    { category: 'Loot', value: 'x1', description: 'Realistic drop rates' },
    { category: 'Spawn', value: 'x1', description: 'Original monster spawns' },
    { category: 'Hunting Duration', value: '1 minute', description: 'Time to gain stamina from hunting' },
    { category: 'Houses', value: 'Level 400+', description: 'Minimum level to buy house' },
    { category: 'Guild Creation', value: 'Level 200+', description: 'Create guild via website' },
  ];

  const pvpRules = [
    { category: 'PZ Lock', value: '1 minute', description: 'Time before leaving protection zone' },
    { category: 'White Skull Time', value: '1 minute', description: 'Duration of white skull' },
    { category: 'Red Skull Length', value: '1 day', description: 'Duration of red skull penalty' },
    { category: 'House Rent', value: 'Disabled', description: 'No rent payments needed' },
    { category: 'House Cleanup', value: '10 days', description: 'Inactive owner homes cleaned' },
    { category: 'Protection Level', value: '200', description: 'Can attack players level 200+' },
    { category: 'PvP Experience', value: 'Enabled', description: 'Gain experience in PvP combat' },
    { category: 'PvP Level Range', value: '80% to 200%', description: 'Can engage players in this range' },
  ];

  const systems = [
    {
      name: 'Talents System',
      description: 'The most essential feature of Evolisca. Customize your character with talent points gained from outfits, mounts, quests, and NPCs.',
      features: [
        'Unlock Page 2 with Talent Page Parchment (1,000 coins)',
        'Unlock Page 3 via Infinity Talents Quest',
        'Reset talents using Talent Tokens',
        'Gain 1 talent every 25 levels'
      ]
    },
    {
      name: 'Enhanced Item System',
      description: 'Upgrade equipment to boost combat effectiveness. Upgradable attributes include armor, defense, attack, critical damage, damage reduction, and more.',
      features: [
        'Maximum upgrade level cap: 10',
        'Upgrade stones cost 15 Star Coins each',
        'Success dependent on luck and stone quality',
        'Unlock advanced mechanics with Bloodforge Set'
      ]
    },
    {
      name: 'Dungeons System',
      description: 'Daily dungeons with increasing difficulty levels. Each offers unique rewards and boss encounters.',
      features: [
        '3 dungeons per day (4 for golden account)',
        '5 difficulty levels: 100, 200, 600, 1200, 1500',
        'Daily reset at midnight server time',
        'Dungeon tokens for NPC rewards'
      ]
    },
    {
      name: 'Tasks & Quests',
      description: 'Progress through daily tasks to earn rewards and unlock boss permissions.',
      features: [
        'Daily reset at 00:00 server time',
        'Tasks grant Star Coins and Task Points',
        'Level 200+ tasks grant valuable points',
        'Task Points used to purchase boss permissions'
      ]
    },
    {
      name: 'Cursed Chests',
      description: 'Mysterious chests that appear after defeating monsters. Contains challenging waves and valuable rewards.',
      features: [
        'Materialize upon monster defeat',
        'Exclusive to the defeating player',
        'Overcome 5 challenging waves',
        'Rewards: star coins, rare dolls, outfits, mounts'
      ]
    },
    {
      name: 'Monster Orbs',
      description: 'Temporary power-ups dropped by defeated monsters. Boost your combat effectiveness for a limited time.',
      features: [
        'Spawn when killing monsters',
        'Only the defeating player can take it',
        'Increases damage, experience, and loot',
        'Grants special aura for combat boost'
      ]
    },
    {
      name: 'Market System',
      description: 'Trade items with other players using gold or premium points.',
      features: [
        'Post items for sale via right-click',
        'Support for gold or premium currency',
        'Set custom offer duration',
        'Browse and filter listings'
      ]
    },
    {
      name: 'Crafting System',
      description: 'Create items across four categories: utility, ingredients, enchants, and cosmetics.',
      features: [
        'Complete crafting quest to start',
        'Unlimited SSA and Might Ring available',
        'Craft end-game sets and enchants',
        'Cosmetic mounts, outfits, and effects'
      ]
    },
    {
      name: 'Fishing System',
      description: 'Catch various fish types with different effects and bonuses.',
      features: [
        'Five fish types available',
        'Purchase rods from NPC Alissa',
        'Skill levels: 10, 50, 70',
        'Fish effects: stat boosts and regeneration'
      ]
    },
    {
      name: 'Daily Rewards Quest',
      description: 'Fight monsters and bosses daily for randomized reward prizes.',
      features: [
        'Daily reset at server save',
        'Rewards include mounts, outfits, currency',
        'RNG-based rewards (luck dependent)',
        'Valuable source of cosmetics'
      ]
    }
  ];

  const specialFeatures = [
    { name: 'No Pay-to-Win', description: 'Fair gameplay without premium advantages' },
    { name: 'Balanced Progression', description: 'Designed for solo and group players' },
    { name: '1200+ Tasks', description: 'Extensive quest and task content' },
    { name: 'Custom Bosses', description: 'Scaling difficulty boss encounters' },
    { name: 'Active Community', description: 'Regular updates and improvements' },
    { name: 'Cosmetics Tracker', description: 'Account-based achievement tracking' },
    { name: 'Evolisca Tokens', description: 'Tradable currency with bank support' },
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Server Information</span>
          <h1>Evolisca: The Eternal Realms</h1>
          <p>
            A premium MMORPG experience combining nostalgic 8.60 gameplay with modern RPG systems. Fair gameplay, balanced progression, and an active community.
          </p>

          <div style={{ marginTop: '24px', display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Server Status
              </span>
              <strong style={{ display: 'block', color: '#87a07d', fontSize: '1.2rem', marginTop: '4px' }}>
                Online 24/7
              </strong>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Client
              </span>
              <strong style={{ display: 'block', color: 'var(--text)', fontSize: '1.2rem', marginTop: '4px' }}>
                Evo 8.60
              </strong>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Region
              </span>
              <strong style={{ display: 'block', color: 'var(--text)', fontSize: '1.2rem', marginTop: '4px' }}>
                Germany
              </strong>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Connect Now</span>
            <h2>How to Play</h2>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px' }}>Server Address</strong>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0', fontFamily: 'monospace', background: 'rgba(255, 255, 255, 0.03)', padding: '8px', borderRadius: '6px' }}>
                evolisca.com:7171
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px' }}>Website</strong>
              <a href="https://evolisca.com" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--gold)', textDecoration: 'none' }}>
                Visit Official Site →
              </a>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px' }}>Community</strong>
              <a href="https://discord.com/invite/Y52aMdpM5A" target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--gold)', textDecoration: 'none' }}>
                Join Discord Server →
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* Rates */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Configuration</span>
            <h2>Server Rates & Settings</h2>
          </div>
          <p>
            Balanced rates designed for both solo and group progression.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {rates.map((rate) => (
            <article key={rate.category} className="panel" style={{ padding: '20px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <strong>{rate.category}</strong>
                <span style={{ color: 'var(--gold)', fontWeight: '700' }}>{rate.value}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                {rate.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PvP Rules */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Combat System</span>
            <h2>PvP Rules & Mechanics</h2>
          </div>
          <p>
            Balanced PvP system with fair level scaling and experience rewards.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {pvpRules.map((rule) => (
            <article key={rule.category} className="panel" style={{ padding: '20px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <strong>{rule.category}</strong>
                <span style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '0.9rem' }}>{rule.value}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                {rule.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Features & Systems */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Custom Systems</span>
            <h2>Game Features</h2>
          </div>
          <p>
            Unique Evolisca systems designed for engaging gameplay.
          </p>
        </div>

        {systems.map((system, idx) => (
          <div key={system.name} style={{ marginBottom: idx < systems.length - 1 ? '32px' : '0' }}>
            <div className="section-heading compact">
              <div>
                <h3 style={{ margin: '0 0 8px 0' }}>{system.name}</h3>
                <p style={{ margin: '0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  {system.description}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '8px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {system.features.map((feature, i) => (
                <div key={i} style={{ padding: '12px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--line)', fontSize: '0.9rem', color: 'var(--text)' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', marginRight: '8px' }} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Special Features */}
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Why Evolisca</span>
            <h2>Special Features</h2>
          </div>
          <p>
            What makes Evolisca unique in the Evo Tibia community.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {specialFeatures.map((feature) => (
            <article key={feature.name} className="panel" style={{ padding: '18px', borderRadius: '14px', textAlign: 'center' }}>
              <strong style={{ display: 'block', marginBottom: '8px', fontSize: '1rem' }}>
                {feature.name}
              </strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Season 4 Highlights */}
      <section className="content-section">
        <div className="panel focus-panel" style={{ padding: '24px' }}>
          <div>
            <span className="eyebrow">Latest Season</span>
            <h2>Season 4: The Evolution</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>
              Season 4 represents a complete evolution of the classic EVO experience, combining nostalgic 8.60 gameplay with modern RPG and MMO systems.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              'Reworked Talent System with multiple pages',
              'New market system for player trading',
              'Account-based achievements and cosmetics tracking',
              'Evolisca Tokens with trading and bank support',
              'Balanced PvP with level range scaling (80%-200%)',
              'Multiple vocation-specific buffs at level milestones'
            ].map((feature, i) => (
              <div key={i} style={{ padding: '10px', borderRadius: '8px', background: 'rgba(135, 160, 125, 0.1)', border: '1px solid rgba(135, 160, 125, 0.2)', fontSize: '0.9rem', color: 'var(--text)' }}>
                <span style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: '#87a07d', marginRight: '8px' }} />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
