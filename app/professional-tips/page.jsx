'use client';

import { Zap, Coins, Gamepad2, Lightbulb, Package, Settings } from 'lucide-react';

export default function ProfessionalTipsPage() {
  const tipCategories = [
    {
      title: 'Economy & Currencies',
      icon: Coins,
      tips: [
        {
          title: 'Stamina Refiller Strategy',
          content: 'Save up Evolisca Tokens and spend them on Stamina Refillers. They cost 25 Evolisca Tokens from the NPC slightly north of your character\'s spawn location inside the temple.',
          icon: '⚡'
        },
        {
          title: 'Understand Currency Types',
          content: 'There are 4 main currency types: Gold coins (gold nuggets = 1,000,000), Evolisca Tokens, Star Coins, and Premium Points (Server Store). Other currencies like dungeon tokens, talent tokens, and monster skull tokens can be traded for valuable items.',
          icon: '💰'
        },
        {
          title: 'Maximize Gold Farming',
          content: 'If your goal is to make as much gold as possible, focus on increasing how much loot you can pick up. Remember that 1,000,000 gold coins equals 1 gold nugget. A Premium Account raises your auto loot from 5 items to 10, which is one of the fastest ways to improve your income. If you can afford an Autoloot Gem later, you can raise that limit to 20 items. Early spawns usually work well with 5 to 10 slots, but hunts around level 600+ often drop many more item types, so extra loot slots help your bot collect more value from every run.',
          icon: '🪙'
        },
        {
          title: 'Market Intelligence',
          content: 'Look on the market before spending Premium Points for better deals. Smart shopping can save significant resources.',
          icon: '📊'
        },
        {
          title: 'Invest in Premium Early',
          content: 'Consider buying Premium status as soon as you can afford it from Johnny at your spawn point. For just 2 Star Coins and 1 Gold Nugget per day, you gain a 10-item looter (compared to 5 items free), access to premium currency, and enhanced content. Since Gold and Star Coins become much easier to obtain as you progress, don\'t worry if you\'re free-to-play early on—the investment pays dividends once you start earning resources faster.',
          icon: '👑'
        }
      ]
    },
    {
      title: 'Combat & Progression',
      icon: Zap,
      tips: [
        {
          title: 'Consumable Synergy',
          content: 'Always have Northern Pike, Rainbow Trout, and Wanda Fish consumables to give your character strong buffs to hunt spawns above your level and gain faster experience.',
          icon: '🐟'
        },
        {
          title: 'Talent Point Acquisition',
          content: 'Acquire as many talent points as you can from completing spawn tasks, NPC missions, and hunting bosses. Each outfit, mount, and cosmetic also gives your character one talent point.',
          icon: '🎯'
        },
        {
          title: 'Strategic Equipment Upgrades',
          content: 'Use equipment upgrade stones wisely and prioritize late-game equipment. Upgrade stone removers exist but they are not cheap, so plan your upgrades carefully.',
          icon: '⬆️'
        }
      ]
    },
    {
      title: 'Gameplay Optimization',
      icon: Settings,
      tips: [
        {
          title: 'Client Configuration',
          content: 'Configure your client settings and bot to maximize your gameplay performance and enhance your experience. Be smart and use scripts wisely to automate repetitive tasks.',
          icon: '⚙️'
        },
        {
          title: 'Automatic Looter Limits',
          content: 'Free accounts can add 5 items to the automatic looter, while Premium Accounts increase that to 10. If you later get an Extra Autoloot Slot item or the Autoloot Gem, you can raise the limit to 20. This is a big help when you want to farm faster, especially on higher-level spawns where more loot drops, but 5 to 10 slots is usually enough for lower-level areas.',
          icon: '📦'
        },
        {
          title: 'Mushroom Strategy',
          content: 'Buy 1,000 brown mushrooms as a low-capacity solution to always keep your character full and regenerating health and mana. Cost-effective passive regeneration.',
          icon: '🍄'
        }
      ]
    }
  ];

  const getIconColor = (index) => {
    const colors = ['#87a07d', '#fbbf24', '#6366f1'];
    return colors[index % colors.length];
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Expert Advice</span>
          <h1>Professional Tips</h1>
          <p>
            Master the game with strategic insights from experienced players. Learn optimal resource management, combat techniques, and gameplay optimization to accelerate your progression and maximize your efficiency in Evolisca.
          </p>

          <div style={{ marginTop: '28px', padding: '18px', borderRadius: '14px', background: 'rgba(135, 160, 125, 0.1)', border: '1px solid rgba(135, 160, 125, 0.2)' }}>
            <strong style={{ color: '#87a07d', display: 'block', marginBottom: '8px' }}>Quick Focus Areas</strong>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.6' }}>
              <li>Currency management and resource optimization</li>
              <li>Combat progression and talent point acquisition</li>
              <li>Performance tuning and game mechanics</li>
            </ul>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Pro Players Know</span>
            <h2>Key Takeaways</h2>
          </div>

          <div style={{ display: 'grid', gap: '14px' }}>
            <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.1)' }}>
              <strong style={{ display: 'block', marginBottom: '4px', color: '#6366f1' }}>Plan Ahead</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Strategic planning for upgrades and consumables saves resources long-term.
              </p>
            </div>
            <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.05)', border: '1px solid rgba(251, 191, 36, 0.1)' }}>
              <strong style={{ display: 'block', marginBottom: '4px', color: '#fbbf24' }}>Optimize Spending</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Compare market prices and use the right currency for the best value.
              </p>
            </div>
            <div style={{ padding: '12px', borderRadius: '10px', background: 'rgba(135, 160, 125, 0.05)', border: '1px solid rgba(135, 160, 125, 0.1)' }}>
              <strong style={{ display: 'block', marginBottom: '4px', color: '#87a07d' }}>Automate Wisely</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Use scripts and bot settings to enhance gameplay without compromising strategy.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {tipCategories.map((category, categoryIdx) => {
        const Icon = category.icon;
        const iconColor = getIconColor(categoryIdx);

        return (
          <section key={category.title} className="content-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon style={{ width: '16px', height: '16px', color: iconColor }} />
                  {category.title}
                </span>
                <h2>{category.title}</h2>
              </div>
              <p>
                {categoryIdx === 0 && 'Master resource management and understand the complex economy of Evolisca.'}
                {categoryIdx === 1 && 'Optimize your combat performance and accelerate your progression path.'}
                {categoryIdx === 2 && 'Fine-tune your gameplay experience with smart settings and strategies.'}
              </p>
            </div>

            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
              {category.tips.map((tip) => (
                <article
                  key={tip.title}
                  className="panel"
                  style={{
                    padding: '24px',
                    borderRadius: '14px',
                    display: 'grid',
                    gap: '14px',
                    borderTop: `4px solid ${iconColor}`,
                    textAlign: 'left',
                    justifyItems: 'start',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.8rem' }}>{tip.icon}</span>
                    <strong style={{ display: 'block', fontSize: '1.05rem', flex: 1 }}>
                      {tip.title}
                    </strong>
                  </div>

                  <p style={{ margin: '0', width: '100%', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'left' }}>
                    {tip.content}
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Account Features</span>
            <h2>Free vs. Premium Account</h2>
          </div>
          <p>
            Understand the differences between free and premium accounts to maximize your playstyle.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <article className="panel" style={{ padding: '24px', borderRadius: '14px', borderTop: '4px solid #6366f1' }}>
            <div style={{ marginBottom: '16px' }}>
              <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px' }}>Free Account</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Starter Edition</span>
            </div>

            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.8' }}>
              <li>5-item automatic looter</li>
              <li>Standard stamina recovery</li>
              <li>Basic client settings</li>
              <li>Full access to all content</li>
            </ul>
          </article>

          <article className="panel" style={{ padding: '24px', borderRadius: '14px', borderTop: '4px solid #fbbf24', background: 'rgba(251, 191, 36, 0.05)' }}>
            <div style={{ marginBottom: '16px' }}>
              <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '4px', color: '#fbbf24' }}>Premium Account</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enhanced Experience</span>
            </div>

            <ul style={{ margin: '0 0 20px 0', paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--text)', lineHeight: '1.8' }}>
              <li>10-item automatic looter</li>
              <li>Unlock Premium only spawns like Frost Dragons (teal colored teleport portals)</li>
              <li>All free account features</li>
            </ul>

            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(251, 191, 36, 0.2)' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '12px', fontWeight: '600' }}>
                Visit Johnny at spawn to upgrade
              </span>
              <img
                src="/images/johnny-premium.webp"
                alt="Johnny - Premium Account NPC"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  border: '2px solid rgba(251, 191, 36, 0.3)',
                  marginBottom: '12px'
                }}
              />
              <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                <strong style={{ color: 'var(--text)' }}>Cost:</strong> 2 Star Coins + 1 Gold Nugget per day
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section" style={{ marginBottom: '0' }}>
        <div className="section-heading">
          <div>
            <span className="eyebrow">Strategy Summary</span>
            <h2>Path to Mastery</h2>
          </div>
          <p>
            The journey to becoming a professional player requires dedication and smart decision-making.
          </p>
        </div>

        <article className="panel" style={{ padding: '28px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(135, 160, 125, 0.05), rgba(99, 102, 241, 0.05))' }}>
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>1️⃣</span>
                <strong>Learn Systems</strong>
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                Understand currencies, items, and game mechanics through exploration and this guide.
              </p>
            </div>

            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>2️⃣</span>
                <strong>Optimize Resources</strong>
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                Plan spending, gather consumables, and invest in meaningful upgrades strategically.
              </p>
            </div>

            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>3️⃣</span>
                <strong>Master Progression</strong>
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                Level efficiently, acquire talent points, and climb the progression tiers.
              </p>
            </div>

            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>4️⃣</span>
                <strong>Automate Smartly</strong>
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                Configure settings and scripts to enhance gameplay without losing control.
              </p>
            </div>

            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>5️⃣</span>
                <strong>Reach Endgame</strong>
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                Complete set gear, maximize upgrades, and dominate high-level content.
              </p>
            </div>

            <div>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
                <strong>Stay Ahead</strong>
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                Continuously learn, adapt strategies, and stay informed about updates.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
