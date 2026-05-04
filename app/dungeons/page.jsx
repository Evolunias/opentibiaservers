'use client';

import { Mountain, Shield, Zap } from 'lucide-react';
import './dungeons.css';

const dungeonsData = [
  {
    name: 'Apes',
    minLevel: 100,
    playersRequired: 1,
    boss: 'King Kong',
    color: '#4ade80',
  },
  {
    name: 'Desert',
    minLevel: 200,
    playersRequired: 1,
    boss: 'Desert Boss',
    color: '#f59e0b',
  },
  {
    name: 'Survivor',
    minLevel: 600,
    playersRequired: 1,
    boss: 'Verminor',
    color: '#ef4444',
  },
  {
    name: 'Holocaust',
    minLevel: 1200,
    playersRequired: 1,
    boss: 'Shadow Shaman',
    color: '#a855f7',
  },
  {
    name: 'Frozen',
    minLevel: 1500,
    playersRequired: 1,
    boss: 'Shadow Priest',
    color: '#06b6d4',
  },
  {
    name: 'Mine',
    minLevel: 2000,
    playersRequired: 1,
    boss: 'Despor',
    color: '#8b5cf6',
  },
  {
    name: 'Jungle',
    minLevel: 2500,
    playersRequired: 1,
    boss: 'Deathstrike',
    color: '#ec4899',
  },
  {
    name: 'Efreet',
    minLevel: 3000,
    playersRequired: 1,
    boss: 'Pyrelash',
    color: '#f97316',
  },
];

const rewardsData = [
  {
    name: 'Upgrade Stone',
    description: 'Can use it to upgrade your item, but it won\'t give you any additional success rate.',
    icon: '🔧',
  },
  {
    name: 'Remove Upgraded Stone',
    description: 'Using this stone on your item will remove all of its upgrade levels and return upgrade stones equal to the number of levels removed.',
    icon: '♻️',
  },
  {
    name: 'Infinity Potion',
    description: 'Drinking this increases your experience rate by 10% for 300 killed creatures.',
    icon: '⚡',
  },
  {
    name: 'Evolisca Mana Rune',
    description: 'You will always feel you are good with our mana rune. (infinite)',
    icon: '🔵',
  },
  {
    name: 'Evolisca Healing Rune',
    description: 'You will always feel you are good with our healing rune. (infinite)',
    icon: '💚',
  },
  {
    name: 'Evolisca Spirit Rune',
    description: 'You will always feel you are good with our spirit rune. (infinite)',
    icon: '👻',
  },
  {
    name: 'Flamefury Potion',
    description: 'Declares the ownership of the unique Flamefury Mage Outfit. Use this to permanently unlock the outfit.',
    icon: '🔥',
  },
  {
    name: 'Platinum Token',
    description: 'This token will increase the maximum talent uses by 1, up to a maximum of 100 uses.',
    icon: '💎',
  },
  {
    name: 'Silver Token',
    description: 'Use this token, and it will restore 1 charge to your dungeon.',
    icon: '🪙',
  },
  {
    name: 'Silver Foxmouse Coin',
    description: 'Declares the ownership of the unique Steel Wings. Use this to permanently unlock the wing.',
    icon: '🪶',
  },
  {
    name: 'Radiant Aura Stone',
    description: 'Declares the ownership of the unique Red Radiant Aura. Use this to permanently unlock the aura.',
    icon: '✨',
  },
  {
    name: 'Sphinx Parchment',
    description: 'Declares the ownership of the unique Gold Sphinx mount. Use this to permanently unlock the mount.',
    icon: '🗺️',
  },
];

export default function DungeonsPage() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Challenges & Exploration</span>
        <h1>Dungeons</h1>
        <p>Explore the most dangerous and exciting dungeons in the realm. Face formidable bosses, collect exclusive rewards, and prove your worth through deadly challenges.</p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/dungeons/adrenius-header.webp"
              alt="Adrenius NPC Trade"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '16px',
                border: '1px solid var(--line)',
                boxShadow: 'none',
                display: 'block',
              }}
            />
          </div>
          <div
            style={{
              background: 'var(--bg-soft)',
              border: '1px solid var(--line)',
              borderRadius: '12px',
              padding: '25px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.8',
            }}
          >
            <h3 style={{ color: 'var(--text)', marginTop: 0, marginBottom: '15px', fontSize: '1.2rem' }}>
              About Dungeons
            </h3>
            <p style={{ margin: '0 0 15px 0', color: 'var(--text-muted)' }}>
              Speaking to <strong>Adrenius</strong> will give you access to all kinds of dangerous and exciting dungeons.
              These perilous adventures test your skills and courage against formidable bosses.
            </p>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              When you complete a dungeon, you will be given a <strong>loot bag</strong> containing many items, including 
              the valuable <strong>Dungeon Token</strong> which can be traded with Adrenius for rare and exclusive items. 
              All dungeons have a <strong>25% chance to spawn</strong>, making each adventure unique and unpredictable.
            </p>
          </div>
        </div>

        {/* Adrenius Trade Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text)', marginBottom: '30px', textAlign: 'center' }}>
            Adrenius Trade
          </h2>
          <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/dungeons/adrenius-trade.webp"
              alt="Trade Items Showcase"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '16px',
                border: '1px solid var(--line)',
                boxShadow: 'none',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Dungeons List */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text)', marginBottom: '30px', textAlign: 'center' }}>
            Evolisca Dungeons
          </h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {dungeonsData.map((dungeon, idx) => (
              <div
                key={idx}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '25px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}
              >
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700', margin: '0 0 15px 0', color: 'var(--text)' }}>
                    {dungeon.name}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', width: '100%' }}>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Min Level</span>
                      <p style={{ margin: '8px 0 0 0', fontSize: '1.1rem', color: 'var(--text)', fontWeight: '600' }}>
                        {dungeon.minLevel}+
                      </p>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Players Required</span>
                      <p style={{ margin: '8px 0 0 0', fontSize: '1.1rem', color: 'var(--text)', fontWeight: '600' }}>
                        {dungeon.playersRequired}
                      </p>
                    </div>
                    <div>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Boss</span>
                      <p style={{ margin: '8px 0 0 0', fontSize: '1.1rem', color: 'var(--text)', fontWeight: '600' }}>
                        {dungeon.boss}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dungeon Bosses Gallery */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text)', marginBottom: '30px', textAlign: 'center' }}>
            Dungeon Bosses
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '25px',
              justifyItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-king-kong.webp"
                alt="King Kong"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>King Kong</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-desert.webp"
                alt="Desert Boss"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Desert Boss</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-verminor.webp"
                alt="Verminor"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Verminor</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-shadow-shaman.webp"
                alt="Shadow Shaman"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Shadow Shaman</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-shadow-priest.webp"
                alt="Shadow Priest"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Shadow Priest</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-despor.webp"
                alt="Despor"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Despor</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-deathstrike.webp"
                alt="Deathstrike"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Deathstrike</p>
            </div>
            <div style={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src="/images/dungeons/boss-pyrelash.webp"
                alt="Pyrelash"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '1px solid var(--line)',
                  marginBottom: '10px',
                }}
              />
              <p style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.1rem', margin: 0 }}>Pyrelash</p>
            </div>
          </div>
        </div>

        {/* Exchange Rewards Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text)', marginBottom: '30px', textAlign: 'center' }}>
            Dungeon Token Exchange Rewards
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
              justifyItems: 'center',
            }}
          >
            {rewardsData.map((reward, idx) => (
              <div
                key={idx}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '25px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-soft)';
                  e.currentTarget.style.borderColor = 'var(--line)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'var(--line)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                  {reward.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                  {reward.name}
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  {reward.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div
          style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--line)',
            borderRadius: '16px',
            padding: '30px',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text)', marginTop: 0 }}>
            Dungeon Exploration Tips
          </h3>
          <ul style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '2', margin: 0, paddingLeft: '25px' }}>
            <li>Always ensure you meet the minimum level requirement before entering a dungeon</li>
            <li>Prepare thoroughly with supplies and equipment before attempting a dungeon</li>
            <li>Dungeons have a 25% chance to spawn, so check back regularly</li>
            <li>Collect Dungeon Tokens to trade with Adrenius for valuable rewards</li>
            <li>Each dungeon has unique boss mechanics—learn their patterns to succeed</li>
            <li>The loot bags contain various items beyond just tokens</li>
            <li>Higher level dungeons offer more prestigious rewards and challenges</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
