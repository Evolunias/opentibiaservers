'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import TalentTree from './TalentTree';

export default function TalentsPage() {
  const talents = [
    {
      id: 1,
      name: 'Damage Increase',
      icon: '⚔️',
      maxLevel: 200,
      description: 'This will increase all your damage by 1% per talent used.',
      details: 'A fundamental offensive talent that scales with every point invested.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/2/22/Dd.png/revision/latest?cb=20240414100941',
      isSquare: true
    },
    {
      id: 2,
      name: 'Damage Reduction',
      icon: '🛡️',
      maxLevel: 25,
      description: 'This will increase your damage reduction by 1% per talent used.',
      details: 'All vocations have a max amount of talents that can be used in damage reduction.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/5/52/Dmgred.png/revision/latest?cb=20240204135145',
      isSquare: true
    },
    {
      id: 3,
      name: 'Critical Damage',
      icon: '💥',
      maxLevel: 300,
      description: 'This will add to your Critical damage, 1 Talent = 1% Crit Damage.',
      details: 'A way to deal more damage than usual by landing critical hits.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/d/dd/Critd.png/revision/latest?cb=20240414101026',
      isSquare: true
    },
    {
      id: 4,
      name: 'Damage Penetration',
      icon: '🔪',
      maxLevel: 20,
      description: 'This will add Penetration to your spells.',
      details: 'This only works against other players in PVP and newly added penetration working on monsters/bosses that have damage reduction.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/b/b3/Penetration.png/revision/latest?cb=20240204135450',
      isSquare: true
    },
    {
      id: 5,
      name: 'Max Health Percent',
      icon: '❤️',
      maxLevel: 100,
      description: 'This will add extra health % which is calculated via your base HP.',
      details: 'Increases your total health pool based on a percentage of your base health.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/c/c9/Mhp.png/revision/latest?cb=20240414101054',
      isSquare: false
    },
    {
      id: 6,
      name: 'Max Mana Percent',
      icon: '💎',
      maxLevel: 100,
      description: 'This will add extra mana % which is calculated via your base MP.',
      details: 'Increases your total mana pool based on a percentage of your base mana.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/5/53/Mmp.png/revision/latest?cb=20240414101117',
      isSquare: false
    },
    {
      id: 7,
      name: 'Consumable Health Increase',
      icon: '🧪',
      maxLevel: 125,
      description: 'This will increase how much a health potion/rune will heal you.',
      details: 'Boosts the effectiveness of all healing items and runes you consume.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/b/be/Chp.png/revision/latest?cb=20240414101140',
      isSquare: false
    },
    {
      id: 8,
      name: 'Consumable Mana Increase',
      icon: '⚡',
      maxLevel: 125,
      description: 'This will increase how much a mana potion/rune will give you.',
      details: 'Boosts the effectiveness of all mana restoration items you consume.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/6/67/Cmi.png/revision/latest?cb=20240414101159',
      isSquare: false
    },
    {
      id: 9,
      name: 'Buffs Spell Amount',
      icon: '✨',
      maxLevel: 10,
      description: 'This will boost the power of your buff spell.',
      details: 'Enhance the quantity of buff spells granted (Concentration – Defensive Stance – Energy).',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/a/ad/Buffs_spell_a.png/revision/latest?cb=20240204135926',
      isSquare: false
    },
    {
      id: 10,
      name: 'Buffs Spell Time',
      icon: '⏱️',
      maxLevel: 20,
      description: 'This will make your buff spells last longer.',
      details: 'Extend the duration of buff spells (Concentration – Defensive Stance – Energy).',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/2/2b/Buffs_spell_time.png/revision/latest?cb=20240204135948',
      isSquare: false
    },
    {
      id: 11,
      name: 'Mana Cost Reduction',
      icon: '💰',
      maxLevel: 20,
      description: 'This will reduce the cost of spells by 1% per talent.',
      details: 'Increase Mana Cost Reduction by 1% per rank.',
      image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/8/81/Mana_cost.png/revision/latest?cb=20240204140008',
      isSquare: false
    },
    {
      id: 12,
      name: 'Luck',
      icon: '🍀',
      maxLevel: 20,
      description: 'This will bring you great fortune when going bosses, Daily reward and dungeons.',
      details: '1% luck added to your looting. Each rank increases Luck by 1% and enhances the chances of obtaining loot from dungeons, daily rewards, cursed chests, and boss encounters.',
      image: '/images/downloaded/builder-6be74877-af5a727c.webp',
      isSquare: false
    },
    {
      id: 13,
      name: 'Super Reduction',
      icon: '🔥',
      maxLevel: 25,
      description: 'A new talent, Super Reduction, has been introduced.',
      details: 'This talent provides a 1% damage reduction at the cost of 10 talent points.',
      image: '/images/downloaded/builder-b8fd151d-4bedaeef.webp',
      isSuper: true,
      isSquare: false
    },
    {
      id: 14,
      name: 'Super Increase',
      icon: '⚡',
      maxLevel: 50,
      description: 'A new talent, Super Increase, has been introduced.',
      details: 'This talent provides a 1% damage increase at the cost of 10 talent points.',
      image: '/images/downloaded/builder-3ed6b4e3-34dcab33.webp',
      isSuper: true,
      isSquare: false
    },
    {
      id: 15,
      name: 'Super Critical',
      icon: '💥',
      maxLevel: 50,
      description: 'A new talent, Super Critical, has been introduced.',
      details: 'This talent provides a 1% critical damage at the cost of 10 talent points.',
      image: '/images/downloaded/builder-5097c093-98ac837f.webp',
      isSuper: true,
      isSquare: false
    }
  ];

  const buildGuides = [
    {
      type: 'Defensive Build',
      icon: '🛡️',
      recommendation: 'Use all talents on damage reduction first. This will make you a lot stronger and be able to fight stronger monsters.',
      focus: 'Damage Reduction, Max Health %, Consumable Health Increase',
      playstyle: 'Tank role - Hold monsters, reduce incoming damage, survive longer encounters.',
      color: '#3b82f6'
    },
    {
      type: 'Offensive Build',
      icon: '⚔️',
      recommendation: 'Focus on damage output talents to maximize your offensive capabilities.',
      focus: 'Damage Increase, Critical Damage, Damage Penetration',
      playstyle: 'DPS role - Deal maximum damage, eliminate threats quickly, high offense.',
      color: '#ef4444'
    },
    {
      type: 'Support/Hybrid Build',
      icon: '✨',
      recommendation: 'Balance defense and offense for versatile gameplay.',
      focus: 'Mix of Damage Reduction, Damage Increase, Buff Spell talents',
      playstyle: 'Utility role - Support party members, heal, buff, maintain sustainability.',
      color: '#8b5cf6'
    },
    {
      type: 'Lucky/Farming Build',
      icon: '🍀',
      recommendation: 'Maximize luck talent for better drops and boss rewards.',
      focus: 'Luck, Damage Increase, Mana Cost Reduction',
      playstyle: 'Solo farming - Hunt efficiently, maximize loot, manage resources.',
      color: '#10b981'
    }
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Character Customization</span>
          <h1>Talents & Progression</h1>
          <p>
            Welcome to the Talents page. At first talents may seem overwhelming, but it's a very simple system which will either give you more power, defence, or both. Let's start with the basics.
          </p>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Talent System</span>
            <h2>Key Basics</h2>
          </div>

          <div className="start-list">
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>1 talent per 25 levels</strong> - Earn points as you level up</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Access via client menu</strong> - Dropdown under the logout button</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Use Talent Tokens</strong> - Reset and reroll your points anytime</p>
            </div>
            <div className="start-item">
              <span className="start-dot" />
              <p><strong>Track your progress</strong> - See unspent points and token inventory</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">System Overview</span>
            <h2>How the Talent System Works</h2>
            <p>Talents are the most essential feature of Evolisca. They allow you to improve your character's core abilities across damage, defense, survivability, and utility. The talent system is flexible—you can adjust your allocations at any time using talent tokens.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 12px 0', color: 'var(--green-strong)' }}>What Talents Do</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Talents are permanent character improvements that you allocate points into. Each talent increases specific character stats and abilities, ranging from raw damage output to survivability and utility effects.
            </p>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 12px 0', color: 'var(--green-strong)' }}>Flexibility</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              You can remove and reallocate your talents at any time using Talent Tokens. This means you can experiment with different builds and adapt your character as you progress or change your playstyle.
            </p>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 12px 0', color: 'var(--green-strong)' }}>Multiple Pages</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              The talent system offers multiple pages that unlock as you progress, each containing additional talents to allocate. Start with Page 1 and unlock Pages 2 and 3 through specific methods.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Earning Progression</span>
            <h2>How to Earn Talents</h2>
            <p>There are multiple ways to accumulate talent points as you progress through Evolisca.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div className="panel" style={{ padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Leveling</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Gain 1 talent every 25 levels.</strong> This is your primary source of talent points as you level up your character. Simply continue progressing and you'll steadily accumulate talents to spend on improvements.
            </p>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Quests</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Each quest awards 1 talent point.</strong> Complete quests throughout Evolisca to earn additional talents beyond your level-based progression. Some special quests, like the Talent Reset Adventure, award even more talents (11 talents) as a bonus reward.
            </p>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>NPC Tasks</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Complete NPC tasks in spawning areas</strong> to earn talent points alongside other rewards. These tasks are repeatable opportunities to gain additional talents through gameplay.
            </p>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Cosmetic Items</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Use cosmetics to gain talent points.</strong> Outfits, mounts, auras, shaders, birds, wings, and footprints can be applied to grant talent points. This is a great way to gain extra talents while collecting cosmetic items.
            </p>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ margin: '0 0 8px 0' }}>Daily Rewards</h3>
            <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text)' }}>Daily rewards can include talent coins.</strong> Complete your daily reward quest for a chance to receive additional resources to support your talent progression. Rewards include mounts, outfits, wings, auras, shaders, birds, money, star coins, and talent coins based on your luck.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Progression Tiers</span>
            <h2>Unlocking Talent Pages</h2>
            <p>The talent system offers multiple pages of talents. You start with Page 1, and can unlock additional pages as you progress.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.15rem' }}>Page 1</h3>
            <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)' }}>
              Available by default. This is your starting talent page with access to fundamental talents for damage, defense, and utility.
            </p>
            <div style={{ padding: '12px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--gold)' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Requirement:</strong> None
              </span>
            </div>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.15rem' }}>Page 2</h3>
            <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)' }}>
              Unlock additional talents to further specialize your character's abilities.
            </p>
            <div style={{ padding: '12px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--gold)' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Unlock with:</strong> Talent Page Parchment (1,000 coins)
              </span>
            </div>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '1.15rem' }}>Page 3</h3>
            <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)' }}>
              Access the most specialized talents to complete your build.
            </p>
            <div style={{ padding: '12px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--gold)' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--text)' }}>Unlock with:</strong> Complete the Infinity Talents Quest
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Adjusting Your Build</span>
            <h2>Managing & Resetting Talents</h2>
            <p>You can change your talent allocations at any time using Talent Tokens. This flexibility lets you experiment with different builds and adapt to your current needs.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '24px' }}>
          <div className="panel" style={{ padding: '24px', borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>Talent Tokens</h3>
            <p style={{ margin: '0 0 16px 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Talent Tokens are special items that allow you to remove talents and reallocate your points. You can obtain them from dungeons and by defeating monsters throughout Evolisca.
            </p>
            <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <div style={{ padding: '16px', background: 'rgba(105, 117, 101, 0.15)', borderRadius: '12px', border: '1px solid var(--line)' }}>
                <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--green-strong)' }}>Dungeon Drops</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Complete dungeons to find Talent Tokens</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(105, 117, 101, 0.15)', borderRadius: '12px', border: '1px solid var(--line)' }}>
                <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--green-strong)' }}>Monster Drops</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>All monsters have a chance to drop Talent Tokens</span>
              </div>
            </div>
          </div>

          <div className="panel" style={{ padding: '24px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.08)', borderLeft: '4px solid #3b82f6' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>Free Reset Quest</h3>
            <p style={{ margin: '0 0 12px 0', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              The <strong style={{ color: 'var(--text)' }}>Talent Reset Adventure Quest</strong> offers a special reward: reset your talents for free and gain 11 bonus talents upon completion. This is a great way to completely restructure your build without needing tokens.
            </p>
            <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Talent adjustments can only be made in protection zones or training areas.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Getting Started</span>
            <h2>The Talent Tree Interface</h2>
            <p>Access your talent tree from the Evolisca client via the dropdown menu underneath the logout button. Inside you'll see how many talent points you have unspent and how many Talent tokens you have in your backpack.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ flex: '0 1 auto', maxWidth: 'clamp(100%, 55%, 600px)' }}>
            <TalentTree />
          </div>

          <div style={{ flex: '1 1 280px', minWidth: 'clamp(280px, 40%, 100%)' }}>
            <div className="panel" style={{ padding: '24px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.04) 100%)', borderLeft: '4px solid #8b5cf6', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <div style={{ fontSize: '36px' }}>⚙️</div>
                <h3 style={{ margin: '0', color: '#8b5cf6', fontSize: '1.3rem' }}>How It Works</h3>
              </div>

              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.08)', borderLeft: '3px solid #8b5cf6' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text)' }}>📊 Allocate Points</p>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Distribute unspent talent points across talents</p>
                </div>

                <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.08)', borderLeft: '3px solid #8b5cf6' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text)' }}>🎯 View Details</p>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Check max levels and talent descriptions</p>
                </div>

                <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.08)', borderLeft: '3px solid #8b5cf6' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text)' }}>🔄 Reset Anytime</p>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Use Talent Tokens to adjust your build</p>
                </div>

                <div style={{ padding: '14px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.08)', borderLeft: '3px solid #8b5cf6' }}>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text)' }}>⭐ Unlock Pages</p>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Access additional talents as you progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Complete Reference</span>
            <h2>All Talents Explained</h2>
            <p>Each talent offers unique benefits. Choose wisely based on your vocation and playstyle.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {talents.map((talent) => (
            <article
              key={talent.id}
              className="panel"
              style={{
                padding: '24px',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0',
                margin: 0,
                background: talent.isSuper ? 'linear-gradient(135deg, rgba(217, 70, 239, 0.08) 0%, rgba(168, 85, 247, 0.04) 100%)' : 'transparent',
                borderLeft: talent.isSuper ? '4px solid #d946ef' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '16px' }}>
                <div style={{ fontSize: '40px', lineHeight: 1 }}>{talent.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{talent.name}</h3>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {!talent.isSuper && (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Max Level: <strong style={{ color: 'var(--text)' }}>{talent.maxLevel}</strong>
                      </span>
                    )}
                    {talent.isSuper && (
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.75rem',
                          backgroundColor: '#d946ef20',
                          color: '#d946ef',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontWeight: '700',
                          letterSpacing: '0.5px'
                        }}
                      >
                        ⭐ SUPER TALENT
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p style={{ margin: '0 0 12px 0', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text)' }}>
                {talent.description}
              </p>

              <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {talent.details}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Build Strategies</span>
            <h2>Recommended Talent Builds</h2>
            <p>After you understand each talent, build your character according to your role and playstyle. It is completely up to you how to distribute your talents.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {buildGuides.map((build) => (
            <div
              key={build.type}
              className="panel"
              style={{
                padding: '20px',
                borderRadius: '14px',
                borderTop: `4px solid ${build.color}`,
                display: 'grid',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <div style={{ fontSize: '28px' }}>{build.icon}</div>
                <h3 style={{ margin: '0', color: build.color }}>{build.type}</h3>
              </div>

              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>EXPERT TIP</span>
                <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.5 }}>
                  {build.recommendation}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>FOCUS ON</span>
                <p style={{ margin: '6px 0 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  {build.focus}
                </p>
              </div>

              <div style={{ padding: '12px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text)' }}>Playstyle:</strong> {build.playstyle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="panel focus-panel">
          <div>
            <span className="eyebrow">Pro Strategy</span>
            <h2>Talent Distribution Tips</h2>
            <p>
              Make the most of your talent points by understanding how they interact with your vocation, gear, and combat role.
            </p>
          </div>

          <div className="focus-points">
            <div>
              <strong>✓ Start with Defense</strong>
              <p>Begin by investing in Damage Reduction to survive stronger monsters, then shift to offense once you're stable.</p>
            </div>
            <div>
              <strong>✓ Understand Your Role</strong>
              <p>Your vocation determines optimal talent paths. Tanks prioritize defense, DPS prioritize damage, supports balance both.</p>
            </div>
            <div>
              <strong>✓ Use Tokens Strategically</strong>
              <p>Experiment with different builds using Talent Tokens. Reset and reroll until you find what works best for you.</p>
            </div>
            <div>
              <strong>✓ Reassess at Milestones</strong>
              <p>As you gain levels and better gear, revisit your talent distribution to optimize for current challenges.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="panel" style={{ padding: '28px', borderRadius: '16px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)' }}>
          <h2 style={{ margin: '0 0 12px 0' }}>Remember: It's Your Character</h2>
          <p style={{ margin: '0', color: 'var(--text-muted)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            After you understand the basics and recommended builds, it is completely up to you how to build your character in your own way. Experiment, adapt, and create a talent distribution that matches your unique playstyle and progression goals. Whether you're a tank, damage dealer, support, or hybrid—your talents should reflect your vision for your character.
          </p>
        </div>
      </section>
    </main>
  );
}
