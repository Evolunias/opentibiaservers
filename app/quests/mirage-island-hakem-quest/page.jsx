'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';

export default function MirageIslandHakemQuestPage() {
  const [expandedSteps, setExpandedSteps] = useState({});

  const questSteps = [
    {
      id: 1,
      number: 1,
      title: 'The Voyage to Mirage Island',
      location: 'Mirage Island Gateway',
      description: 'At level 600 and beyond, you have earned the right to venture to the mystical Mirage Island. This legendary realm exists between the material world and the ethereal planes, accessible only to warriors of proven strength and determination.',
      details: 'The journey to Mirage Island is perilous, requiring passage through treacherous waters and supernatural barriers. Only those who have demonstrated exceptional prowess in combat can withstand the trials of reaching this elusive island. As you arrive at the gateway, an ancient presence welcomes you. The island shimmers with magical energy, its golden sands glinting under an otherworldly sun. You have arrived at a place where legends are born.',
      images: [
        '/images/quests/mirage-island-hakem-quest/step-01-introduction-1.webp',
        { src: '/images/quests/mirage-island-hakem-quest/step-01-introduction-icon.webp', isIcon: true }
      ],
      tips: ['Level requirement: 600+ is mandatory for this quest', 'Come prepared with healing potions and protection spells', 'This is the beginning of a legendary adventure']
    },
    {
      id: 2,
      number: 2,
      title: 'Greet Hakem, the Ancient Guardian',
      location: 'Mirage Island - Central Chamber',
      description: 'Upon the island, you encounter Hakem, an enigmatic figure of immense power and wisdom. He is the keeper of ancient secrets and the guardian of trials that test the worthiness of those who seek true greatness. His eyes pierce through you as if reading the very essence of your soul.',
      details: 'Hakem stands before you, draped in robes that seem woven from starlight itself. His presence radiates an aura of tremendous magical power and ancient knowledge. He regards you with interest—it has been ages since one of your caliber arrived at this sacred place. Greet him with respect, and listen carefully to his words. This encounter will change the trajectory of your entire existence.',
      images: [],
      tips: ['Approach Hakem with honor and respect', 'Listen intently to every word he speaks', 'This is a momentous meeting—treat it as such']
    },
    {
      id: 3,
      number: 3,
      title: 'Accept the Final Mission',
      location: 'Mirage Island - Hakem\'s Chamber',
      description: 'Hakem presents you with a series of missions, each one a stepping stone toward glory and power. After you complete his initial tasks, he reveals his final mission—one that has remained unfulfilled for centuries. He asks you directly: "Are you worthy? Will you accept this ultimate challenge?"',
      details: 'With profound gravity, Hakem explains that his greatest responsibility is protecting powerful artifacts of immense magical significance. One such artifact—a set of mystical musical notes—has been missing for ages, hidden in a place beyond ordinary reach. The notes are said to contain the very essence of harmony and power, capable of elevating one\'s spirit to transcendent heights. He needs a champion brave enough to retrieve them. When he asks if you accept, you feel the weight of destiny itself pressing upon you. Choose "yes" to accept your final mission.',
      images: [],
      tips: ['Responding "yes" commits you to this epic quest', 'Hakem\'s final mission is the most prestigious honor', 'Prepare yourself mentally for what lies ahead']
    },
    {
      id: 4,
      number: 4,
      title: 'Discover the Bookshelf Location',
      location: 'Underground Ruins - Northeast Chamber',
      description: 'Hakem reveals the location of the musical notes: beneath the surface, in ancient underground ruins hidden far to the northeast of the island. There, deep beneath layers of stone and forgotten history, lies a bookshelf of immense antiquity. This is no ordinary shelf—it is a portal, sealed by magic and accessible only to those deemed worthy.',
      details: 'The underground chamber lies beneath what was once an elvish civilization. The elves who built these ruins possessed knowledge beyond measure, and they left behind guardians and enchantments of extraordinary power. The bookshelf stands in the northeastern reaches of these ruins, glowing with faint magical runes. Its weathered wood speaks of countless ages, its shelves holding secrets that have been protected since time immemorial. According to Hakem\'s instructions, you must find this specific bookshelf—a landmark stands out among the shadows of the underground.',
      images: [
        '/images/quests/mirage-island-hakem-quest/step-04-voyage-1.webp',
        '/images/quests/mirage-island-hakem-quest/step-04-voyage-2.webp',
        '/images/quests/mirage-island-hakem-quest/step-04-voyage-3.webp'
      ],
      imagesLayout: 'three-columns',
      tips: ['The bookshelf is located northeast in the underground ruins', 'It\'s hidden beneath ancient elvish territory', 'The magical glow helps identify the correct location', 'Come prepared for supernatural phenomena']
    },
    {
      id: 5,
      number: 5,
      title: 'Interact with the Ancient Bookshelf',
      location: 'Underground Ruins - The Portal',
      description: 'You find yourself before the legendary bookshelf. Its presence is overwhelming—ancient magic radiates from every fiber of its construction. Symbols carved into its frame pulse with ethereal light. This is a threshold between worlds, a gateway to a realm few have ever glimpsed.',
      details: 'The bookshelf stands before you, massive and imposing. The books on its shelves are bound in leather and adorned with jewels that no longer shine with the luster they once possessed. The air around it crackles with magical energy. Right-click upon the bookshelf to interact with it. When you do, the ancient magic will recognize your worthiness and transport you to the inner sanctum where the musical notes await. This moment will test not just your courage, but your very faith in destiny itself.',
      images: [
        '/images/quests/mirage-island-hakem-quest/step-05-bookshelf.webp'
      ],
      tips: ['Right-click on the bookshelf to activate it', 'The ancient magic will respond to your worthiness', 'Prepare yourself for a teleportation event']
    },
    {
      id: 6,
      number: 6,
      title: 'The Mystical Teleportation',
      location: 'Beyond the Veil - Inner Sanctum',
      description: 'As your hand touches the bookshelf, reality itself trembles! A explosion of arcane energy erupts, bathing you in brilliant light. The world spins and shifts. You feel yourself being pulled through layers of existence, passing through dimensions beyond mortal comprehension.',
      details: 'The teleportation is instantaneous yet feels eternal. You witness glimpses of other worlds, other times, other possibilities. The magic that carries you is ancient beyond reckoning—the very magic that the elves themselves wielded when they were masters of all lands. Then, as suddenly as it began, the journey ends. You find yourself in a new chamber, one hidden from the surface world for countless ages. This is the inner sanctum, the true resting place of the sacred musical notes. The air here is thick with concentrated magic.',
      images: [
        '/images/quests/mirage-island-hakem-quest/step-06-sanctum.webp'
      ],
      tips: ['You have crossed into a hidden realm', 'The sanctum is protected by layers of ancient magic', 'You are closer than ever to the sacred notes']
    },
    {
      id: 7,
      number: 7,
      title: 'Open the Sacred Chest',
      location: 'Inner Sanctum - The Vault',
      description: 'Before you stands an ornate chest, crafted from materials unknown to modern civilization. It radiates an ethereal glow, and you can feel the tremendous power contained within. This chest has guarded the musical notes since before kingdoms rose and fell. Now, at last, it seems to acknowledge your arrival.',
      details: 'The chest is a masterwork of ancient artistry. Its surface is covered in intricate carvings depicting scenes of harmony, power, and transcendence. Precious stones set into its frame glow with colors you have never seen before. The musical notes you seek lie within, waiting to be claimed by one worthy of their power. Right-click upon the chest to open it. The ancient magic will recognize your achievement in reaching this place and will grant you access to the greatest treasure Hakem has to offer.',
      images: [
        '/images/quests/mirage-island-hakem-quest/step-07-chest.webp'
      ],
      tips: ['The chest opens only for those deemed worthy', 'Right-click to access its contents', 'The musical notes are your ultimate goal in this chamber', 'Approach with reverence—this is sacred']
    },
    {
      id: 8,
      number: 8,
      title: 'Hakem\'s Recognition & Reward Confirmation',
      location: 'Mirage Island - Hakem\'s Chamber',
      description: 'You return to Mirage Island bearing the sacred musical notes. Hakem awaits you, his ancient eyes glowing with the knowledge that you have succeeded. As you approach, he rises to greet you, and for the first time, you see him smile—a smile that speaks of ages of wisdom and profound respect.',
      details: 'Hakem accepts the musical notes with a reverence that befits their importance. He places them gently in his hands, and they begin to glow with brilliant light. The notes sing softly, a melody so beautiful and transcendent that it seems to touch the very fabric of reality itself. "You have done what few could accomplish," Hakem says, his voice resonating with cosmic power. "You have proven yourself worthy of the greatest honors. These notes will not only reward you with unprecedented power and experience, but they will also mark you as someone who has earned the respect of the ancient forces that govern this realm. Your legend has grown this day—let all know of your achievement." He bestows upon you not only the rewards that the musical notes provide, but also his personal blessing. You are now forever marked as one of the legendary heroes of Evolisca.',
      images: [
        '/images/quests/mirage-island-hakem-quest/step-08-completion.webp'
      ],
      tips: ['Your quest is now complete', 'You have earned the blessing of Hakem himself', 'The musical notes grant extraordinary power', 'Your legend spreads across Evolisca']
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
          <span className="eyebrow">The Path to Legendary Power</span>
          <h1>Mirage Island - Hakem's Final Mission</h1>
          <p>
            Journey to the mystical Mirage Island and seek an audience with Hakem, the ancient guardian of forbidden knowledge. This is no ordinary quest—it is a trial reserved only for those who have reached level 600 and proven their worth a thousandfold. Accept Hakem's final mission to retrieve the sacred musical notes, hidden beneath the isle in ancient underground ruins. Navigate the northeastern chambers where elvish magic still resonates, discover the legendary bookshelf portal, and transport yourself into a realm beyond mortal comprehension. Only the worthiest of heroes can claim the musical notes and earn the personal blessing of Hakem himself. This is your chance to transcend beyond legend.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>8</strong>
              <span style={{ color: 'var(--text-muted)' }}>Epic Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>1</strong>
              <span style={{ color: 'var(--text-muted)' }}>Final Challenge</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>600+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Level Required</span>
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
            <h2>Your Journey</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Requirement</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>Level 600+</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Only the most powerful warriors may attempt</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(147, 112, 219, 0.1)', border: '1px solid rgba(147, 112, 219, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Chapter 1</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Voyage Begins</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Reach Mirage Island and meet Hakem</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(64, 224, 208, 0.1)', border: '1px solid rgba(64, 224, 208, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Chapter 2</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Sacred Mission</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Accept the final mission from Hakem</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(138, 43, 226, 0.1)', border: '1px solid rgba(138, 43, 226, 0.3)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Chapter 3</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Musical Notes</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Retrieve the legendary artifact and return</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Quest Steps Section */}
      <section className="content-section">
        <div style={{ display: 'grid', gap: '16px' }}>
          {questSteps.map((step) => {
            const isExpanded = expandedSteps[step.id];
            
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(75, 0, 130, 0.15) 0%, rgba(255, 215, 0, 0.08) 100%)',
                  border: '1px solid rgba(147, 112, 219, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(147, 112, 219, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(147, 112, 219, 0.3)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
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
                      background: 'rgba(147, 112, 219, 0.2)',
                      border: '1px solid rgba(147, 112, 219, 0.4)',
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
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(147, 112, 219, 0.2)', display: 'grid', gap: '16px' }}>
                    {/* Detailed Description */}
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', color: 'var(--gold)', fontWeight: '700' }}>📖 The Full Story</h4>
                      <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                        {step.details}
                      </p>
                    </div>

                    {/* Image Gallery */}
                    {step.images && step.images.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 12px 0', color: 'var(--gold)', fontWeight: '700' }}>🎨 Visual Guide</h4>
                        <div style={{
                          display: step.imagesLayout === 'three-columns' ? 'grid' : 'grid',
                          gridTemplateColumns: step.imagesLayout === 'three-columns' ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(250px, 1fr))',
                          gap: '12px'
                        }}>
                          {step.images.map((image, idx) => {
                            const src = typeof image === 'string' ? image : image.src;
                            const isIcon = typeof image === 'object' && image.isIcon;

                            return (
                              <img
                                key={idx}
                                src={src}
                                alt={`${step.title} screenshot ${idx + 1}`}
                                style={{
                                  width: isIcon ? '80px' : '100%',
                                  height: isIcon ? '80px' : step.imagesLayout === 'three-columns' ? '200px' : 'auto',
                                  maxHeight: isIcon ? '80px' : '400px',
                                  objectFit: 'contain',
                                  borderRadius: '8px',
                                  border: '1px solid rgba(147, 112, 219, 0.3)',
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
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: '#90ee90', fontWeight: '700' }}>💡 Adventurer's Tips</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
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
        <div style={{ padding: '24px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.2) 0%, rgba(255, 215, 0, 0.08) 100%)', border: '1px solid rgba(147, 112, 219, 0.4)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            ✨ The Path to Legendary Status
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              Hakem's Final Mission represents the pinnacle of challenging quests for adventurers who have risen to level 600 and beyond. This is not a task for the faint of heart—it requires unwavering courage, strategic thinking, and an unshakeable belief in your own destiny. Those who complete this quest will be forever marked as legends of Evolisca, worthy of the highest honors and the greatest rewards.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(147, 112, 219, 0.1)', border: '1px solid rgba(147, 112, 219, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>⚔️ Prepare for Ascension</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Equip your finest gear, bring potent healing elixirs, and prepare your spirit. This quest will test everything you have learned as an adventurer.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(147, 112, 219, 0.1)', border: '1px solid rgba(147, 112, 219, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🌟 Embrace Your Destiny</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  You have proven yourself worthy through countless battles and trials. Now is your time to claim what is rightfully yours.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(147, 112, 219, 0.1)', border: '1px solid rgba(147, 112, 219, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🎵 The Sacred Reward</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  The musical notes grant extraordinary power, experience, and the eternal blessing of Hakem himself.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 215, 0, 0.15)', border: '1px solid rgba(255, 215, 0, 0.4)' }}>
              <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🏆 The Final Blessing</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Upon completing Hakem's Final Mission, you will not only receive the legendary musical notes and unparalleled rewards, but you will also earn the personal recognition of Hakem, the ancient guardian himself. This blessing marks you as one of Evolisca's greatest heroes, a status that will echo through the ages. Few have achieved what you are about to accomplish. Fewer still will maintain the courage to pursue it. Will you be one of them?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
