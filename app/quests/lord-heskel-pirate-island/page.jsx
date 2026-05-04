'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import '../quest-steps.css';

export default function LordHeskelPirateIslandQuestPage() {
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
      title: 'Gather Your Crew and Prepare Entry',
      location: 'Pirate Island Entrance',
      description: 'The greatest challenge in Evolisca awaits—a battle against Lord Heskel, the legendary pirate boss. Before you can even step into the arena, your entire party must meet the entrance requirements. This is not a solo endeavor. Every member of your 5-player team must possess 1 golden token and 40 star coins. Without these sacred items, the lever will remain jammed, unyielding to even the strongest warriors.',
      details: 'Travel south east of where you discover the Pirate Island teleport through the Elves. There you will find the boat—your gateway to destiny. But before anyone can pull the lever, every player in your party must verify they have the required items in their inventory. If even one member is missing these crucial components, the entire group is locked out. This forces true teamwork—you must coordinate with your allies, share resources if needed, withdraw from the bank together, or ask friends for assistance. The cost of entry is steep, but the rewards justify the investment. Once all players have paid the price and the lever is pulled, Lord Heskel awaits.',
      images: [
        '/images/quests/lord-heskel-pirate-island/step-01-crew-and-entry-1.webp',
        '/images/quests/lord-heskel-pirate-island/step-01-crew-and-entry-2.webp'
      ],
      isTwoColumns: true,
      tips: [
        '1 golden token per player required',
        '40 star coins per player required',
        'All 5 players must have items to proceed',
        'Find the boat south east of the Pirate Island teleport',
        'Withdraw from bank or ask friends for items',
        'The lever will jam if anyone is missing items',
        'Coordinate with your party before attempting entry'
      ]
    },
    {
      id: 2,
      number: 2,
      title: 'Identify the Cracked Tiles',
      location: 'Boss Arena - Lord Heskel\'s Chamber',
      description: 'You have entered the boss arena. Before you stands Lord Heskel, the most fearsome pirate captain to ever sail Evolisca\'s waters. But the battle mechanics are not what you expect. Defeating this legendary boss requires knowledge, precision, and unity. Your first task is to identify the cracked tiles scattered throughout the arena—these are not merely decorative. They are the key to damaging Lord Heskel itself.',
      details: 'Look carefully around the boss chamber. You will notice certain tiles have visible cracks in them, marking them as distinct from the solid floor. These are no ordinary floor panels. Each cracked tile you and your party members step on channels damage directly into the boss. The visual guide above shows you exactly where these tiles are located. Study the reference image carefully before engaging. Your strategy depends on coordinating your movements—each player must step on every cracked tile in sequence to maximize damage output. This is not a frenzied brawl; it is a choreographed dance of destruction where positioning and timing are paramount.',
      images: [
        '/images/quests/lord-heskel-pirate-island/step-02-cracked-tiles.webp'
      ],
      tips: [
        'Identify all cracked tiles in the arena',
        'Use the visual guide as your reference',
        'Each player must step on every cracked tile',
        'Stepping on cracked tiles damages Lord Heskel',
        'Coordinate tile activation with your party',
        'Do not waste time—keep moving between tiles',
        'Multiple players can step on the same tile'
      ]
    },
    {
      id: 3,
      number: 3,
      title: 'Execute the Battle Strategy',
      location: 'Boss Arena - Combat Zone',
      description: 'The true battle begins now. As your party steps on cracked tiles, Lord Heskel takes damage, but do not mistake this for safety. The pirate boss is a formidable opponent that will fight back with devastating attacks. While your damage dealers activate cracked tiles and rain spells upon the boss, your healer and tank must maintain perfect defensive coordination. Your blocker must use Challenge or Exeta Res constantly to prevent Lord Heskel from switching targets and devastating your vulnerable casters.',
      details: 'This is a battle of multitasking and perfect execution. Your tank must hold aggro at all costs while your healer keeps them alive—the damage Lord Heskel deals is immense and relentless. Your range damage dealers must continue activating cracked tiles while maintaining range and staying alive. Every member of the party must use their buff spells to increase damage, attack speed, and defensive capabilities. Hold your ground. Do not panic when the boss strikes. Coordinate your healing, maintain your formation, and keep stepping on those cracked tiles. The boss cannot be defeated through brute force alone—it requires the synchronized execution of your entire team. Stand together, fight as one, and victory will be yours.',
      images: [
        '/images/quests/lord-heskel-pirate-island/step-03-battle-strategy.webp'
      ],
      tips: [
        'Tank must use Challenge or Exeta Res constantly',
        'Healer must keep the blocker alive at all costs',
        'Damage dealers step on cracked tiles while attacking',
        'All players use buff spells for increased stats',
        'Hold your ground and maintain formation',
        'Coordinate all actions with your party members',
        'Healing is critical—never stop',
        'Stay alert for Lord Heskel\'s devastating attacks',
        'You can enter every 2-3 hours per character for invaluable loot'
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

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">The Ultimate Challenge</span>
          <h1>Lord Heskel - Pirate Island</h1>
          <p>
            Only the most legendary warrior crews in all of Evolisca dare to face Lord Heskel, the fearsome pirate captain who rules Pirate Island with an iron fist. This is not a quest for the faint of heart. This is a 5-player boss event where every member of your team must prove their worth. Before you can even enter the arena, your entire party must gather the cost of entry: 1 golden token and 40 star coins per player. Once inside, you will face a boss battle unlike any other. Lord Heskel does not merely attack—he requires strategy, precision, and absolute coordination. Your team must identify and activate cracked tiles scattered throughout the arena to damage the boss. Your tank must hold aggro. Your healer must keep everyone alive. Your damage dealers must optimize their positioning and spell rotations. One mistake, one moment of miscommunication, and your entire crew is sent back to the respawn point, losing all the resources you invested. But for those brave enough to persist and skilled enough to succeed, the loot is invaluable—accessible once every 2-3 hours per character. This is where legends are forged. This is where teams become immortal. This is Lord Heskel.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>3</strong>
              <span style={{ color: 'var(--text-muted)' }}>Epic Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>1500+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Level Recommended</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>5 Players</strong>
              <span style={{ color: 'var(--text-muted)' }}>Required</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Legendary</strong>
              <span style={{ color: 'var(--text-muted)' }}>Difficulty</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Boss Event Overview</span>
            <h2>Your Crew's Destiny</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 1</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Crew Gathers</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Prepare your team and pay the entry cost</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 180, 100, 0.1)', border: '1px solid rgba(255, 180, 100, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 2</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Arena Strategy</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Identify and activate cracked tiles</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(100, 200, 255, 0.1)', border: '1px solid rgba(100, 200, 255, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 3</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Boss Battle</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Defeat Lord Heskel and claim glory</p>
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
                        ) : (
                          // Full width layout
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
                        <h4 className="quest-step-section-header">⚔️ Pirate Captain's Wisdom</h4>
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

      {/* Quest Completion Info */}
      <section className="content-section" style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(105, 117, 101, 0.15) 0%, rgba(251, 191, 36, 0.08) 100%)', border: '1px solid rgba(105, 117, 101, 0.3)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            ⚓ The Pirate's Crown
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              Lord Heskel stands as one of the most fearsome boss challenges in all of Evolisca. This is not a solo quest. This is a battle that demands perfect teamwork, unbreakable communication, and the absolute mastery of each party member's role. The entrance cost weeds out the unprepared; the arena mechanics test your strategic knowledge; and the boss itself mercilessly punishes any moment of hesitation or miscommunication.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>💪 Team Coordination</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Every member must execute their role perfectly. Tank holds aggro, healer keeps everyone alive, damage dealers activate tiles and cast spells. One failure cascades into total defeat.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🎯 Strategic Execution</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  The cracked tiles are not optional—they are the core mechanic. Know their locations, plan your movement routes, and execute flawlessly. Damage without tile activation is wasted effort.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🔄 Endless Opportunities</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  You can challenge Lord Heskel every 2-3 hours per character. This allows your entire crew to farm invaluable loot with no equal price. Persistence yields legendary rewards.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.4)' }}>
              <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>✨ The Legendary Treasure</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Upon defeating Lord Heskel, your crew will be rewarded with loot of incalculable value. These are not common drops—they are treasures worthy of the most elite warriors in Evolisca. Equipment pieces, rare artifacts, and resources that will elevate your entire crew's power are yours for the claiming. Every 2-3 hours, the boss respawns, offering your crew the opportunity to farm this legendary loot indefinitely. Few challenges in Evolisca offer such generous rewards for such demanding battles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
