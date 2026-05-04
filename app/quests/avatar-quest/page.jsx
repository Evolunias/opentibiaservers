'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import '../quest-steps.css';

export default function AvatarQuestPage() {
  const [expandedSteps, setExpandedSteps] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  const questSteps = [
    {
      id: 1,
      number: 1,
      title: 'Enter the Quest Chamber',
      location: 'Quest Room',
      description: 'Your legendary journey begins at the threshold of destiny. The Avatar Quest awaits only those who have reached Level 1000 and proven themselves worthy of the most dangerous trials in Evolisca. This is where legends are forged and mortals are tested beyond their limits.',
      details: 'Step through the ancient portal that leads to the Avatar realm. The air crackles with otherworldly power as you cross the threshold. This quest is not merely a trial—it is a transformative experience that will either elevate you to godlike status or reduce you to dust. The creatures you will face, the dangers you will encounter, and the boss you must defeat are beyond anything you have previously experienced. Come prepared, come fearless, come ready to become an Avatar.',
      images: [
        '/images/downloaded/builder-3456e220-bfbfd021.webp'
      ],
      tips: ['Level 1000+ required', 'Bring top-tier equipment and supplies', 'A strong team is absolutely essential', 'Have healing items and potions in abundance']
    },
    {
      id: 2,
      number: 2,
      title: 'Battle Through the First Floor',
      location: 'Central Courtyard',
      description: 'Make your way to the center of the first floor, fighting the most dangerous creatures Evolisca has ever spawned: the legendary Ghazbaran, the relentless Garacks, and the nightmarish Abyssal Shadowfiend. Each of these creatures is a boss-level threat on its own.',
      details: 'Ghazbaran is the most dangerous—dealing massive damage and possessing an enormous health pool, these creatures hit harder than anything you have encountered before. Garacks have lower hitpoints but strike with devastating precision; focus them first to reduce the pressure. Abyssal Shadowfiend occupies the middle ground—hitting hard with medium health, they are unpredictable and dangerous. A Knight using Challenge or Exeta Res is absolutely mandatory for entry-level players. Your blocker must be experienced and equipped with the finest protective gear. Coordinate your attacks, heal constantly, and never allow the monsters to separate your party. One miscalculation here means death for your entire team.',
      images: [
        '/images/downloaded/builder-3005ee98-4a24eb7f.webp',
        '/images/downloaded/builder-2c689006-e323d4bc.webp'
      ],
      isTwoColumns: true,
      tips: [
        'Garacks have LOW HP—prioritize them first',
        'Abyssal Shadowfiend hits HARD with medium health',
        'Ghazbaran deals the MOST damage and has MASSIVE HP',
        'Knight with Challenge/Exeta Res is MANDATORY for entry-level players',
        'Healers must keep the blocker alive at all costs',
        'Coordinate team attacks and maintain formation'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Tread Carefully Through the Caves',
      location: 'Avatar Quest Caves',
      description: 'Once you enter the caves, your greatest enemy becomes the environment itself. In this dark and twisted realm, many staircases and rope spots have no way back up or down. A single wrong step can leave you stranded or separated from your team forever.',
      details: 'The caves are a labyrinth of danger. Unlike normal quest areas where you can retreat, these passages are one-way traps for the unwary. Map your route carefully, communicate constantly with your party, and NEVER separate. The terrain shifts unexpectedly; monsters lurk in corners waiting to ambush isolated adventurers. Stay together, move methodically, and always verify your path before committing to a descent or climb.',
      images: [
        '/images/downloaded/builder-fc173884-eb048d68.webp'
      ],
      tips: [
        'Many staircases and rope spots have NO WAY BACK',
        'Never separate from your party',
        'Map your route carefully',
        'Test each path before committing your entire team',
        'One wrong step can trap you permanently'
      ]
    },
    {
      id: 4,
      number: 4,
      title: 'Discover the Northwestern Passage',
      location: 'Northwestern Cave System',
      description: 'Head west until you find a distinctive spot—a cave formation that looks exactly like the reference image. This marks the path to the northwest. Push fully to the northwest corner, navigating through treacherous terrain and dangerous creatures.',
      details: 'This passage is deliberately hidden, accessible only to those observant enough to spot the distinctive rock formations. The northwestern route is a maze of winding tunnels and deadly drops. Every corridor looks similar; every junction could be your last. Pay close attention to the layout and trust your instincts. The Avatar statue awaits at the end of this harrowing journey.',
      images: [
        '/images/downloaded/builder-5d24e7e8-c46c3126.webp',
        '/images/downloaded/builder-7b0c52b6-4c5aa5b9.webp',
        '/images/downloaded/builder-e1a90f39-9d64211b.webp',
        '/images/downloaded/builder-a1801e01-392a827b.webp'
      ],
      isMultiGrid: true,
      tips: [
        'Look for the distinctive cave formation as your marker',
        'Head fully to the northwest corner',
        'Watch for one-way passages',
        'The Avatar statue is your destination'
      ]
    },
    {
      id: 5,
      number: 5,
      title: 'Activate the Statue and Redirect',
      location: 'Avatar Statue Chamber',
      description: 'Once you\'ve clicked the Avatar statue and activated its ancient power, head back to the rope spot where you entered. This time, instead of going west, turn north. The statue\'s activation has unlocked new paths and revealed passages that were previously sealed.',
      details: 'The statue is the key to your progression. Its power resonates through the entire cave system, opening doors and revealing shortcuts that were invisible before. The northern route from the starting rope spot is now passable. This passage will lead you deeper into the Avatar realm, closer to your ultimate destiny. Click with precision, then navigate the newly opened paths with confidence.',
      images: [
        '/images/downloaded/builder-0ea01cf0-b0183232.webp'
      ],
      tips: [
        'Click the statue to activate its power',
        'Return to the original rope spot',
        'Go NORTH instead of west this time',
        'New passages are now open to you'
      ]
    },
    {
      id: 6,
      number: 6,
      title: 'Climb Through Treacherous Mountains',
      location: 'Mountain Range - Dangerous Terrain',
      description: 'Continue through mountains and terrain filled with the same deadly creatures: Garacks, Ghazbaran, and Abyssal Shadowfiend. This is not a safe passage—every step is contested by monsters that want nothing more than your death. Your Crusader or Knight must lead the charge, keeping enemies focused on the tank while your damage dealers pour on the hurt.',
      details: 'The mountains are a continuous battlefield. Monsters spawn frequently and change targets rapidly. Your tank must heal constantly and maintain aggro on multiple enemies. Damage dealers must stay behind the front line and watch their hitpoints vigilantly. The terrain itself is hostile—there are no stairs or rope spots back down certain sections. If you descend, you must continue forward; retreat is impossible. Coordinate perfectly or die. Keep climbing, keep fighting, and never let your guard down for even a moment.',
      images: [
        '/images/downloaded/builder-08307dea-ef253c94.webp',
        '/images/downloaded/builder-d4935bde-aacf37ab.webp',
        '/images/downloaded/builder-a8575be3-79d709e3.webp'
      ],
      isThreeColumns: true,
      tips: [
        'Crusader or Knight MUST lead and tank',
        'Monsters change targets FREQUENTLY',
        'Healers must keep the tank alive',
        'Damage dealers must stay in range but protected',
        'NO RETREATS from certain sections',
        'Watch your hitpoints constantly',
        'Heal constantly and maintain formation'
      ]
    },
    {
      id: 7,
      number: 7,
      title: 'Find the Teleport Portal',
      location: 'Eastern Mountain Passage',
      description: 'Head east and climb multiple mountains. The terrain becomes increasingly dangerous, the air grows thicker with magic, and finally—after what feels like an eternity of climbing—you discover it: a teleport portal glowing with ethereal light.',
      details: 'The portal is your gateway to the final trials. This is the point of no return. Once you step through this portal, you cannot go back. The Avatar awaits on the other side. Prepare yourself mentally, ensure your party is fully healed and prepared, then step into the light and embrace your destiny.',
      images: [
        '/images/downloaded/builder-48cf76b9-e5e5f19c.webp',
        '/images/downloaded/builder-d2a0012f-41a7c3ba.webp'
      ],
      isTwoColumns: true,
      tips: [
        'Climb east through the mountains',
        'The portal marks the final stage',
        'This is a POINT OF NO RETURN',
        'Ensure everyone is fully healed before entering',
        'Your final battle awaits beyond'
      ]
    },
    {
      id: 8,
      number: 8,
      title: 'Navigate the Dark Dungeon',
      location: 'Avatar Dungeon - Dark Corridor',
      description: 'You emerge from the portal into a dark and narrow dungeon. Immediately, you are surrounded by mobs on all sides. The air is thick and claustrophobic. You have two options: stack tightly for mutual protection if you\'re confident in your capabilities, or have your tank lead the way, pushing north to secure the passage and prevent your damage dealers from taking unnecessary damage.',
      details: 'The dungeon is chaos incarnate. Monsters spawn from every direction. Your tank must position themselves to block the passage and protect your vulnerable teammates. Sorcerers, Druids, and Paladins must hang back but remain in healing range. Stacking is risky but can work if executed perfectly. Spreading out is safer but leaves individuals vulnerable. Make your call based on your party\'s strength and trust. Push north aggressively—there is a larger chamber ahead where you\'ll have more room to maneuver.',
      images: [
        '/images/downloaded/builder-96c3301c-ba586017.webp',
        '/images/downloaded/builder-6ef4721c-81981da1.webp',
        '/images/downloaded/builder-35e78abb-45c3ad3c.webp'
      ],
      isThreeColumns: true,
      tips: [
        'You will be SURROUNDED immediately upon entry',
        'Stack if confident, or have tank lead if cautious',
        'Tank blocks the passage to protect healers',
        'Push NORTH toward the larger chamber',
        'Damage dealers stay in healing range',
        'Constant communication is critical'
      ]
    },
    {
      id: 9,
      number: 9,
      title: 'Face the Avatar Boss',
      location: 'Avatar Lair - Final Chamber',
      description: 'You enter the final room and there it stands: the Avatar. This is the most powerful creature in Evolisca. It can eliminate anyone in its Area of Effect range with a single strike. It changes targets frequently and unpredictably. It has an absolutely massive health pool. And here\'s the critical truth: NOT A SINGLE BLOCKER CAN TANK THIS CREATURE.',
      details: 'This is where traditional tactics fail. The Avatar is not meant to be tanked. Instead, your healers must position themselves at the very edges of the screen, maintaining Sio range but staying far from the center where the Avatar AOE is most devastating. Your damage dealers must also stay in range but remain vigilant about their hitpoint pools—the Avatar drains health with terrifying speed. Dodge when possible, spread out to minimize AOE damage, and coordinate your healing perfectly. The fight is a desperate dance between damage and survival. Your team must move as one organism, responding instantly to threats, healing the moment someone drops below 50% health, and never, EVER allowing overconfidence to creep in. Dozens of parties have failed here. Will you succeed?',
      images: [
        '/images/downloaded/builder-7f39d235-50c32f8c.webp',
        '/images/downloaded/builder-b8bfabab-6d446c1d.webp',
        '/images/downloaded/builder-8d7b89c9-01adb1d6.webp'
      ],
      isThreeColumns: true,
      tips: [
        'The Avatar can 1-HIT anyone in AOE range',
        'Changes targets FREQUENTLY and UNPREDICTABLY',
        'NO BLOCKER can tank this creature',
        'Healers must be at EDGE OF SCREEN in Sio range',
        'Damage dealers in range but away from danger',
        'Health drains EXTREMELY QUICKLY',
        'Spread formation to minimize AOE damage',
        'Perfect coordination is the only path to victory'
      ]
    },
    {
      id: 10,
      number: 10,
      title: 'Claim Your Avatar Transformation',
      location: 'Reward Chamber',
      description: 'The Avatar falls. You stand victorious. A teleport portal appears before you, shimmering with the same ethereal light that has guided your journey. Step through and claim your legendary reward: the ability to instantly transform into Avatar form when taking damage, and permanently reduced damage taken.',
      details: 'You have become an Avatar. Your character gains the ability to transform when damage is taken, entering a state of invulnerability where you are protected from the worst of the incoming harm. This is not just a reward—it is a permanent change to your very being. You will walk through Evolisca forever changed, your power elevated beyond what you were before. The damage reduction is permanent and applies to all damage you take, forever. You are no longer an ordinary adventurer. You are legendary. You are an Avatar. Congratulations, warrior—your legend is written in the stars now.',
      images: [
        '/images/downloaded/builder-131ff9c7-203b3da2.webp',
        '/images/downloaded/builder-85cb00bc-bf0ed81e.webp'
      ],
      isTwoColumns: true,
      tips: [
        'Step through the portal to claim your reward',
        'You gain Avatar transformation ability',
        'Damage reduction becomes permanent',
        'This reward applies to your entire character',
        'You are now marked as Avatar in Evolisca'
      ]
    }
  ];

  const toggleStep = (id) => {
    setExpandedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">The Ultimate Ascension</span>
          <h1>Avatar Quest</h1>
          <p>
            Only the mightiest warriors of Evolisca, those who have reached Level 1000 and proven themselves in countless battles, may dare to attempt the Avatar Quest. This is not merely a quest—it is a rite of passage, a transformation, a journey into godhood itself. From the moment you step through the portal until you face the Avatar boss in its lair, every second will test your skills, your courage, and your unwavering determination. The creatures you face—Ghazbaran, Garacks, and Abyssal Shadowfiends—are boss-level threats that spawn endlessly. The terrain itself becomes your enemy, with one-way passages and deadly drops. The environment forces you to make split-second decisions that could mean the difference between victory and a humiliating death. And at the end, the Avatar awaits: a creature so powerful that no single blocker can tank it, forcing you to employ unprecedented tactics and coordination. But for those who succeed, the reward transcends power itself. You will gain the ability to transform into Avatar form and receive a permanent reduction in damage taken. You will become something more than human. You will become a LEGEND.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>10</strong>
              <span style={{ color: 'var(--text-muted)' }}>Epic Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>1000+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Level Required</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>5+ Players</strong>
              <span style={{ color: 'var(--text-muted)' }}>Recommended</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Legendary</strong>
              <span style={{ color: 'var(--text-muted)' }}>Difficulty</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quest Overview</span>
            <h2>Your Ascension</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 1</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The First Floor</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Battle through legendary creatures</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 180, 100, 0.1)', border: '1px solid rgba(255, 180, 100, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 2</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Caves & Mountains</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Navigate deadly terrain and one-way passages</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(100, 200, 255, 0.1)', border: '1px solid rgba(100, 200, 255, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 3</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Avatar</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Face the ultimate creature and transform</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Quest Steps Section */}
      <section className="content-section">
        <div style={{ display: 'grid', gap: '16px' }}>
          {questSteps.map((step) => {
            const isExpanded = expandedSteps[step.id];
            const isTwoColumnImages = step.isTwoColumns;
            const isThreeColumnImages = step.isThreeColumns;
            const isMultiGridImages = step.isMultiGrid;

            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className="quest-step-card"
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '1.5rem', fontWeight: '700', minWidth: '40px' }}>
                        {step.number.toString().padStart(2, '0')}
                      </span>
                      <div>
                        <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--gold)', fontWeight: '700' }}>
                          {step.title}
                        </h3>
                        <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          📍 {step.location}
                        </p>
                      </div>
                    </div>
                    <p style={{ margin: '8px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4', marginLeft: '52px' }}>
                      {step.description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                    <span style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'rgba(251, 191, 36, 0.2)',
                      border: '1px solid rgba(251, 191, 36, 0.4)',
                      color: 'var(--gold)',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap'
                    }}>
                      Step {step.number}
                    </span>
                  </div>
                </div>

                {/* Expand Button */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginLeft: '52px' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                    {isExpanded ? 'Hide Details' : 'Explore Details'}
                  </span>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', fontWeight: '700' }}>
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="quest-step-expanded">
                    {/* Detailed Description */}
                    <div>
                      <h4 className="quest-step-section-header">📖 The Full Story</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                        {step.details}
                      </p>
                    </div>

                    {/* Image Gallery */}
                    {step.images && step.images.length > 0 && (
                      <div>
                        <h4 className="quest-step-section-header" style={{ marginBottom: '12px' }}>🎨 Visual Guide</h4>
                        {isTwoColumnImages ? (
                          // Two column layout
                          <div className="quest-image-grid-2">
                            {step.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`${step.title} screenshot ${idx + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className="quest-step-image"
                              />
                            ))}
                          </div>
                        ) : isThreeColumnImages ? (
                          // Three column layout
                          <div className="quest-image-grid-3">
                            {step.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`${step.title} screenshot ${idx + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className="quest-step-image"
                                style={{ maxHeight: '350px' }}
                              />
                            ))}
                          </div>
                        ) : isMultiGridImages ? (
                          // Four images: 3 in first row, 1 in second row
                          <div className="quest-image-grid-multi">
                            <div>
                              {step.images.slice(0, 3).map((image, idx) => (
                                <img
                                  key={idx}
                                  src={image}
                                  alt={`${step.title} screenshot ${idx + 1}`}
                                  onClick={() => setSelectedImage(image)}
                                  className="quest-step-image"
                                  style={{ maxHeight: '300px' }}
                                />
                              ))}
                            </div>
                            {step.images.length > 3 && (
                              <div>
                                {step.images.slice(3).map((image, idx) => (
                                  <img
                                    key={3 + idx}
                                    src={image}
                                    alt={`${step.title} screenshot ${3 + idx + 1}`}
                                    onClick={() => setSelectedImage(image)}
                                    className="quest-step-image"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          // Default: Full width single column
                          <div className="quest-images">
                            {step.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`${step.title} screenshot ${idx + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className="quest-step-image"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div>
                        <h4 className="quest-step-section-header">⚔️ Adventurers Wisdom</h4>
                        <ul className="quest-tips-list">
                          {step.tips.map((tip, idx) => (
                            <li key={idx} style={{ marginBottom: '4px' }}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease-out',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes slideIn {
              from {
                transform: scale(0.9) translateY(20px);
                opacity: 0;
              }
              to {
                transform: scale(1) translateY(0);
                opacity: 1;
              }
            }
          `}</style>
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(251, 191, 36, 0.3)',
              animation: 'slideIn 0.3s ease-out',
              background: '#1a1a1a'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(251, 191, 36, 0.2)',
                border: '1px solid rgba(251, 191, 36, 0.4)',
                color: 'var(--gold)',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000,
                transition: 'all 0.2s',
                padding: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(251, 191, 36, 0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(251, 191, 36, 0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Enlarged quest image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain'
              }}
            />

            {/* Image Info Bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                padding: '24px 16px 16px',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                textAlign: 'center'
              }}
            >
              Click to close or press Escape
            </div>
          </div>
        </div>
      )}

      {/* Quest Completion Info */}
      <section className="content-section" style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(105, 117, 101, 0.15) 0%, rgba(251, 191, 36, 0.08) 100%)', border: '1px solid rgba(105, 117, 101, 0.3)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            🌟 The Path to Godhood
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              The Avatar Quest represents the pinnacle of challenge in Evolisca. Only those who have reached Level 1000 and truly mastered their vocation dare attempt this ultimate trial. The creatures you will face—Ghazbaran, Garacks, and Abyssal Shadowfiends—are not mere monsters; they are legendary beings that have claimed the lives of countless adventurers. The environment itself becomes your enemy. The final boss, the Avatar, cannot be tanked by any blocker in existence. It requires unprecedented coordination, perfect timing, and the kind of unity that only the strongest teams possess.
            </p>

            {/* Avatar Transformation Image Section */}
            <div style={{ padding: '20px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)', border: '2px solid rgba(251, 191, 36, 0.4)', display: 'grid', gridTemplateColumns: 'auto auto 1fr', gap: '20px', alignItems: 'center' }}>
              <img
                src="/images/downloaded/builder-d4d90242-7dc9d56a.webp"
                alt="Avatar transformation"
                onClick={() => setSelectedImage('/images/downloaded/builder-d4d90242-7dc9d56a.webp')}
                style={{
                  width: '100%',
                  maxWidth: '220px',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <img
                src="/images/downloaded/builder-7dd3c8a8-c6c08ed4.webp"
                alt="Avatar form"
                onClick={() => setSelectedImage('/images/downloaded/builder-7dd3c8a8-c6c08ed4.webp')}
                style={{
                  width: '100%',
                  maxWidth: '220px',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--gold)', fontSize: '1.1rem', fontWeight: '700' }}>✨ Avatar Transformation</h4>
                <p style={{ margin: 0, color: 'var(--text)', fontSize: '1rem', lineHeight: '1.6', fontWeight: '500' }}>
                  Avatar actives automatically when taking damage.
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>⚡ Combat Mastery</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Understand every creature. Garacks die quickly but hit hard. Ghazbaran destroys your party. Shadowfiends change between the two. Adapt constantly or perish.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🗺️ Environmental Navigation</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  One-way passages trap the careless. The caves are a labyrinth. Mountains have no retreat. Scout carefully and commit only when certain.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>💪 Unbreakable Will</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Failure is an option. Most parties do fail. If you die, you can attempt again. Learn from each failure and grow stronger.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.4)' }}>
              <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>✨ The Legendary Reward</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Upon defeating the Avatar, you will be forever changed. Your character gains the ability to instantly transform into Avatar form when taking damage. More importantly, you will receive a permanent reduction to all damage you take for the rest of your existence in Evolisca. This is not a temporary buff. This is not a consumable reward. This is a permanent alteration to your very being. You will emerge from this quest as a LEGEND, marked forever as one of the elite warriors who has ascended beyond mortal limitations. Your peers will recognize your achievement. Your enemies will fear your name. You are no longer merely an adventurer. You are an AVATAR.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
