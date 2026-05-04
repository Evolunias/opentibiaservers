'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';

export default function SecondPromotionQuestPage() {
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
      title: 'The Elite Quest Entrance',
      location: 'Quest Room',
      description: 'Your initiation into the Second Promotion Quest begins here—at the legendary quest entrance where only the mightiest warriors dare to enter. Level 820+ is merely the starting threshold; true strength is measured by your ability to persevere through the trials that await.',
      details: 'This is where elite knights forge their destiny. The entrance radiates an aura of power and mystery. Beyond this portal lies a challenge that will test not just your combat skills, but your strategic thinking, your courage, and your unbreakable will. The ancient magic here recognizes those worthy of the Second Promotion. Are you prepared to ascend?',
      images: [
        '/images/downloaded/builder-c40d875c-e49b8a26.webp'
      ],
      tips: ['Level 820+ required to proceed', 'Elite Knight class is mandatory', 'Come prepared with top-tier equipment', 'Bring potions and protective items']
    },
    {
      id: 2,
      number: 2,
      title: 'The Path of Destiny - West and South',
      location: 'First Chamber',
      description: 'Your journey begins by heading westward, then turning south where destiny awaits. There, you will discover the first of many magical tiles that serve as keys to unlock the passage forward. These ancient tiles are more than mere floor decorations—they are conduits of arcane power.',
      details: 'Navigate carefully through the shadows and mysterious corridors. The western passage winds mysteriously, concealing secrets from those not keen enough to spot them. As you turn south, the air grows thick with magic. The first glowing tile materializes before you, its surface pulsing with otherworldly energy. Step upon it to unlock the next stage of your quest.',
      images: [
        '/images/downloaded/builder-fad4c37b-45dff3ac.webp'
      ],
      tips: ['Head west first', 'Turn south to find the magical tile', 'The tile glows with ethereal light', 'Step upon it to activate its power']
    },
    {
      id: 3,
      number: 3,
      title: 'The Trial of Complete Conquest',
      location: 'Monster Chambers',
      description: 'Every chamber you enter conceals deadly guardians—monsters that have claimed the lives of countless adventurers. Your challenge is absolute: you must eliminate every single creature in each room before proceeding. The white tile at the center grants passage only to the truly victorious.',
      details: 'This is where many have faltered. The monsters here are fierce, intelligent, and relentless. They do not retreat; they do not surrender. You must face each one with unwavering determination. But heed this warning—they respawn with alarming speed. Once you clear a chamber, you have mere moments to reach the white tile before reinforcements arrive. Speed and precision are your greatest allies. Leave no enemy standing, then rush to activate the tile before chaos erupts anew.',
      images: [
        '/images/downloaded/builder-f7498470-ca149629.webp'
      ],
      tips: ['Kill every monster without exception', 'Monsters respawn very quickly', 'Clear the room completely first', 'Rush to the white tile immediately after', 'Do not hesitate—speed is survival']
    },
    {
      id: 4,
      number: 4,
      title: 'The Western Path and Descent',
      location: 'Corridor and Staircase',
      description: 'You exit your first triumph and now follow westward into a grand corridor. The path leads downward—descending stairs that seem to spiral into the earth itself. With the first magical tile activated, doors that were sealed now swing open before you, granting access to deeper mysteries.',
      details: 'The stairs creak beneath your feet as you descend, each step taking you deeper into the quest\'s heart. The architecture here is ancient, built by craftsmen whose names have been lost to time. The doors open with the recognition of your success, acknowledging that you are one of the few who has earned passage this far. The deeper levels await.',
      images: [
        '/images/downloaded/builder-6cfab137-64d4e917.webp',
        '/images/downloaded/builder-42dd8a6a-02dc3e61.webp'
      ],
      tips: ['Head west from the previous chamber', 'Descend the spiral staircase', 'The door opens automatically for you', 'Stay alert for additional challenges']
    },
    {
      id: 5,
      number: 5,
      title: 'The Twin Paths Continue',
      location: 'Adjacent Passage',
      description: 'Alongside the western descent, another passage reveals itself. These twin paths work in concert, each containing mysteries that complement the other. Navigate both with caution and strategy.',
      details: 'The architecture splits here, creating a duality that mirrors the cosmic balance of power and mystery. Both paths must be traversed to unlock the full potential of the Second Promotion Quest. Work through them methodically, collecting the knowledge and power each offers.',
      images: [],
      tips: ['Explore both the west and adjacent paths', 'Complete each chamber methodically', 'Your success here directly impacts later trials', 'Gather all necessary magical activations']
    },
    {
      id: 6,
      number: 6,
      title: 'The Three Remaining Trials',
      location: 'Lower Chambers - South',
      description: 'Now you venture southward where three additional chambers await—each more perilous than the last. Monster populations grow denser; their strength increases with each successive chamber. You must clear all three and activate their respective white tiles to gain access to the reward chamber where glory and transformation await.',
      details: 'The quest intensifies dramatically here. The monsters in these chambers are veterans of countless battles—Garacks with their devastating strikes, Wild Warriors with unpredictable combat patterns, and Grandpa Lords whose wisdom makes them dangerously tactical fighters. Each chamber is a battle of attrition and strategy. Clear them all, and you draw ever closer to the final reward—the promotional scroll that will elevate your vocational class and the spell buff that will transform your capabilities forever.',
      images: [
        '/images/downloaded/builder-5d927932-c6ce6312.webp'
      ],
      tips: ['Three chambers lie ahead', 'Enemies are increasingly challenging', 'Clear each completely before proceeding', 'The rewards make the struggle worthwhile']
    },
    {
      id: 7,
      number: 7,
      title: 'The First of Three - Chamber One',
      location: 'Southern Trial Chamber One',
      description: 'The first of the three southern trials presents itself. Garacks—fierce creatures with armor-piercing attacks—patrol this chamber. Your tactical acumen will be tested here as much as your sword arm.',
      details: 'Navigate the chamber carefully, studying the movement patterns of the Garacks. They are predictable if you pay attention, but devastating if you allow them to catch you unprepared. Eliminate them with precision, then activate the white tile to proceed.',
      images: [
        '/images/downloaded/builder-77ca47a0-9cc73cef.webp'
      ],
      tips: ['Face the Garacks without fear', 'Eliminate all threats methodically', 'Study their attack patterns', 'Activate the white tile upon victory']
    },
    {
      id: 8,
      number: 8,
      title: 'The Second of Three - Chamber Two',
      location: 'Southern Trial Chamber Two',
      description: 'You press onward into the second southern chamber. Here, Wild Warriors make their stand—erratic combatants whose unpredictable nature makes them uniquely dangerous. They do not fight with the disciplined strikes of trained soldiers; instead, they fight with savage determination and chaotic energy.',
      details: 'These warriors are the embodiment of untamed fury. Their attacks come without warning, their tactics shift moment to moment. You must adapt rapidly, reading their moves and countering with precision. No two Wild Warriors fight identically—each is a unique puzzle demanding your full attention and strategic flexibility.',
      images: [
        '/images/downloaded/builder-cad09ae5-030bd885.webp',
        '/images/downloaded/builder-c7daee9e-eb8162fe.webp'
      ],
      tips: ['Wild Warriors are unpredictable', 'Adapt your strategy constantly', 'Do not rely on rote patterns', 'Maintain focus and flexibility']
    },
    {
      id: 9,
      number: 9,
      title: 'The Third of Three - Chamber Three',
      location: 'Southern Trial Chamber Three',
      description: 'You have reached the final of the three southern chambers—the true test of your capabilities. Here stand the Grandpa Lords, ancient warriors whose battles have spanned centuries. These are not mere monsters; they are veterans of countless conflicts, wise in the ways of combat and armored in both steel and experience.',
      details: 'The Grandpa Lords command respect. They do not attack recklessly; they anticipate your moves, counter your strategies, and adapt to your tactics. This is a battle of wits as much as strength. Every action you take, they have likely encountered before. Yet you possess something they do not—the hunger of a new generation, the drive of one seeking to ascend beyond your current limits. Defeat them, prove yourself their equal or superior, and the path to your promotion stands fully open.',
      images: [
        '/images/downloaded/builder-f6303fca-740c5164.webp'
      ],
      tips: ['Grandpa Lords are cunning and experienced', 'Anticipate their counterattacks', 'Do not underestimate their wisdom', 'Victory here proves your mastery']
    },
    {
      id: 10,
      number: 10,
      title: 'The Map Review - Strategic Advantage',
      location: 'Central Chamber',
      description: 'Pause and survey the landscape before you. A detailed map of the chamber layout reveals two critical areas you may have overlooked: the north chamber and the chamber to the east. These are not optional—they contain the first two magical tiles necessary for proceeding.',
      details: 'Take a moment to study the architecture and the positions of your enemies. The north chamber holds untapped power; the eastern chamber guards secrets essential to your progress. Unlike the southern chambers, these locations have not yet fallen to your might. Survey them carefully, noting enemy positions and chamber layouts. You will need this knowledge to clear them efficiently.',
      images: [
        '/images/downloaded/builder-8ea2933f-047c6a2f.webp'
      ],
      tips: ['Study the map carefully', 'The north chamber awaits', 'The eastern chamber holds secrets', 'Plan your route strategically']
    },
    {
      id: 11,
      number: 11,
      title: 'The Northern Chamber Conquest',
      location: 'Northern Trial Area',
      description: 'You ascend northward to claim this chamber. The enemies here are formidable but known to you—you\'ve faced their type before in the southern trials. This is your opportunity to demonstrate that you have learned from each encounter, grown stronger through each victory.',
      details: 'The northern chamber is where you consolidate your power and prove consistent mastery. Clear it with the efficiency of a seasoned warrior, activate the magical tile, and move toward your final objectives.',
      images: [
        '/images/downloaded/builder-ba694bb8-129c2073.webp'
      ],
      tips: ['Head north with determination', 'Clear all enemies thoroughly', 'Activate the north chamber\'s magic tile', 'You are nearly complete']
    },
    {
      id: 12,
      number: 12,
      title: 'The Reward Chamber Beckons',
      location: 'Final Passages - Three Directions',
      description: 'Head back north towards the reward room where you\'ll have to enter the final chamber with the most monsters. This is where everything you\'ve learned, everything you\'ve conquered, comes together in one final, overwhelming battle.',
      details: 'Once you reach the crossroads, you must head west into the final confrontation. If you\'ve done all the parts correctly and stepped on the four different magical tiles since the beginning of the quest, you will be able to open the door. This is the final lock, the ultimate test before the treasure awaits. Clear your mind, steel your resolve—the moment of your transformation is nearly here.',
      images: [
        '/images/downloaded/builder-c31fa653-46f54203.webp'
      ],
      tips: ['Head north towards the reward room', 'At the crossroads, go west', 'You must have stepped on 4 magical tiles total', 'The door opens only for the worthy']
    },
    {
      id: 13,
      number: 13,
      title: 'Behold the Treasure',
      location: 'Final Chamber Approach',
      description: 'Get a peek at the treasures while you head north, upstairs into the final room! There\'s no way back from this point forward. Every step you take now is a commitment to victory. The reward chamber lies just beyond—where your Second Promotion awaits.',
      details: 'As you ascend the final stairs and catch your first glimpse of the reward chamber, your heart races with anticipation. The treasures visible within glow with an ethereal light. The promotional scroll and spell buff that will define the next chapter of your legend shine brightly. There is no retreat now. Only forward, only victory.',
      images: [
        '/images/downloaded/builder-7aeaf342-cffd921a.webp',
        '/images/downloaded/builder-b7ab6a00-e102cdc4.webp'
      ],
      tips: ['Get a view of the treasures ahead', 'You are moments away from your reward', 'There is no turning back now', 'Victory is within grasp']
    },
    {
      id: 14,
      number: 14,
      title: 'The Final Room',
      location: 'Reward Chamber - Final Monster Gauntlet',
      description: 'Up the stairs! You enter the final room where the most concentrated monster population awaits. This is it—the ultimate test. Clear the room and claim what is rightfully yours. Stack carefully when you enter; monsters will swarm from all directions. The chaos is overwhelming but brief. Survive it, and the rewards are yours.',
      details: 'The final room is a maelstrom of combat. Monsters spawn from every corner, filling the chamber with chaos and destruction. You must fight with everything you have learned in this quest. Garacks, Wild Warriors, Grandpa Lords—they all make a final stand against you. But you are stronger now. You have proven yourself a hundred times over. One final victory, and your transformation begins. Once you leave the room, the monsters respawn, so move quickly to the treasure.',
      images: [
        '/images/downloaded/builder-d0a05c22-b0073975.webp',
        '/images/downloaded/builder-39326cf0-da7f27f6.webp'
      ],
      tips: ['Stack carefully when entering', 'Monsters will spawn in waves', 'Fight with all your strength', 'Move quickly to avoid respawns', 'Victory is the only option']
    },
    {
      id: 15,
      number: 15,
      title: 'Claim Your Promotion!',
      location: 'The Treasure Vault',
      description: 'Finally, you\'re done! The quest is complete. Before you lies the reward of your arduous journey—the promotional scroll and spell buff that will elevate you to Second Promotion status. But act quickly!',
      details: '⚠️ **CRITICAL:** Click the BOOK to access your reward, then click the CHEST to claim your promotional scroll and spell buff. Your vocation will be upgraded immediately, and the spell buff will permanently increase your magical potency. You are no longer merely an elite knight—you are now a SECOND PROMOTED warrior of Evolisca. Your legend has been earned. Welcome to the elite ranks of the second ascension. Your journey continues, but you will never be the same.',
      images: [
        '/images/downloaded/builder-8ff44fc4-9b1449eb.webp'
      ],
      tips: ['Click the BOOK first to access rewards', 'Then click the CHEST to claim your items', 'Your spell buff increases permanently', 'Your vocation is now upgraded to Second Promoted', 'Congratulations, legend!']
    },
    {
      id: 16,
      number: 16,
      title: 'The Glooth Bomb Boss Spawn',
      location: 'Hidden Chamber - Beyond the Door',
      description: 'Your quest for power does not end at promotion. Now that you have claimed the promotional scroll and spell buff, a new opportunity reveals itself. Re-enter the quest chamber and ascend the stairs to the second area—there you will find a door that was previously sealed. It now opens for those who have proven themselves worthy.',
      details: 'This is where true legends are forged. The Glooth Bomb boss awaits those bold enough to challenge it. This fearsome creature guards invaluable loot and access to exclusive waypoints that will forever alter your journey through Evolisca. Enter the quest again, navigate to the second area up the stairs, and open the door that stands before you. Face the boss, claim the legendary rewards, and unlock waypoint access reserved only for the elite among elites.',
      images: [
        '/images/downloaded/builder-7196218f-2e7d19ce.webp',
        '/images/downloaded/builder-227fe243-7d7462e8.webp',
        '/images/downloaded/builder-220eac4a-1f33d4a9.webp'
      ],
      tips: ['Re-enter the Second Promotion Quest', 'Head to the second area up the stairs', 'The door will now be openable', 'Face the Glooth Bomb boss for legendary rewards', 'Claim your waypoint access and glory']
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
          <span className="eyebrow">The Elite's Challenge</span>
          <h1>Second Promotion Quest</h1>
          <p>
            Only the most formidable warriors dare tread this path. The Second Promotion Quest is not a mere test—it is a gauntlet designed to separate the legendary from the merely skilled. From the moment you step through the elite entrance until you claim the promotional scroll, every corridor, every chamber, every enemy will demand your absolute best. Face Garacks with their devastating strikes, adapt to the chaotic nature of Wild Warriors, and match wits with the ancient Grandpa Lords. Traverse magical tiles, conquer monster-infested chambers, and ultimately step into the reward chamber where your transformation into a Second Promoted warrior becomes reality. This quest does not ask if you are strong enough. It demands that you prove it.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>16</strong>
              <span style={{ color: 'var(--text-muted)' }}>Epic Steps</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>820+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Level Required</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>5+ Players</strong>
              <span style={{ color: 'var(--text-muted)' }}>Recommended</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>Elite</strong>
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
            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 1</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Elite Entrance</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Begin your journey through sacred halls</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(255, 180, 100, 0.1)', border: '1px solid rgba(255, 180, 100, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 2</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>Monster Trials</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Conquer Garacks, Warriors, and Grandpa Lords</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'rgba(100, 200, 255, 0.1)', border: '1px solid rgba(100, 200, 255, 0.2)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Phase 3</span>
              <div style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '1.2rem' }}>The Reward</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Claim your Second Promotion scroll</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Quest Steps Section */}
      <section className="content-section">
        <div style={{ display: 'grid', gap: '16px' }}>
          {questSteps.map((step) => {
            const isExpanded = expandedSteps[step.id];
            // Steps 4, 13, 15, 16, 17 have paired/multiple images
            const isImagePair = step.id === 4; // Step 4: 2-column layout
            const isMultipleImages = [13, 15, 16, 17].includes(step.id); // Multiple images in separate rows

            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: 'var(--bg-soft)',
                  border: '1px solid var(--line)',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line-strong)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--line)';
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
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--line)',
                      color: 'var(--text)',
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
                    {isExpanded ? 'Hide Details' : 'View Guide'}
                  </span>
                  <span style={{ color: 'var(--gold)', fontSize: '1.2rem', fontWeight: '700' }}>
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'grid', gap: '16px' }}>
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
                        {isImagePair ? (
                          // Step 4: Two column layout for side-by-side images
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                            {step.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`${step.title} screenshot ${idx + 1}`}
                                onClick={() => setSelectedImage(image)}
                                style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '1px solid var(--line)',
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
                            ))}
                          </div>
                        ) : isMultipleImages ? (
                          // Steps 13, 15, 16, 17: Separate rows for each image
                          <div style={{ display: 'grid', gap: '16px' }}>
                            {step.images.map((image, idx) => (
                              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                                <img
                                  src={image}
                                  alt={`${step.title} screenshot ${idx + 1}`}
                                  onClick={() => setSelectedImage(image)}
                                  style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '1px solid var(--line)',
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
                              </div>
                            ))}
                          </div>
                        ) : (
                          // Default: Full width layout
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                            {step.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`${step.title} screenshot ${idx + 1}`}
                                onClick={() => setSelectedImage(image)}
                                style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '400px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                border: '1px solid var(--line)',
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
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tips */}
                    {step.tips && step.tips.length > 0 && (
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: '#90ee90', fontWeight: '700' }}>💡 Elite Warrior's Tips</h4>
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
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.3)',
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
        <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--gold)' }}>
            🏆 The Path of the Elite
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              The Second Promotion Quest stands as a monument to your evolution as a warrior. You come here as an elite knight; you leave as a Second Promoted force of nature. The challenges you will face—the Garacks, the Wild Warriors, the Grandpa Lords—are no laughing matter. Yet you have trained for this. You have proven yourself in lesser trials. Now comes the moment where you transcend your current limitations and claim a status that only the mightiest achieve.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>⚡ Master Your Combat</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Each enemy type requires different strategies. Garacks demand precision, Wild Warriors need flexibility, Grandpa Lords require wisdom. Adapt or perish.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>⏱️ Manage Your Time</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Monsters respawn quickly. Clear chambers completely but move with urgency. The magical tiles must be activated before reinforcements arrive.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.2)' }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>🛡️ Never Drop Your Guard</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  The quest is relentless. Keep potions ready, maintain your equipment, and never underestimate an opponent. Overconfidence has claimed greater warriors than you.
                </p>
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(251, 191, 36, 0.15)', border: '1px solid rgba(251, 191, 36, 0.4)' }}>
              <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: '8px' }}>✨ The Ultimate Reward</strong>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Upon completion, you will claim the promotional scroll for your vocational upgrade, elevating your class to Second Promoted status. Additionally, you will receive a powerful spell buff that permanently enhances your magical capabilities. You will emerge from this quest transformed—stronger, wiser, and marked forever as one of Evolisca's legendary warriors. The respect you will earn, the power you will gain, and the prestige you will hold will set you apart from all but the most elite adventurers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Journey Image Section */}
      <section className="content-section" style={{ marginTop: '40px', paddingBottom: '40px' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '1.3rem', color: 'var(--gold)', textAlign: 'center' }}>
            🌟 Your Epic Journey Awaits
          </h2>
          <img
            src="/images/downloaded/builder-5d8997d1-cd8b7ab9.webp"
            alt="Epic second promotion quest journey"
            onClick={() => setSelectedImage('/images/downloaded/builder-5d8997d1-cd8b7ab9.webp')}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '600px',
              borderRadius: '8px',
              border: '1px solid var(--line)',
              cursor: 'pointer',
              transition: 'transform 0.3s',
              objectFit: 'cover'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>
      </section>
    </main>
  );
}
