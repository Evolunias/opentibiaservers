'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function NPCsPage() {
  const npcSections = [
    {
      area: 'First Area',
      creatures: ['Rotworm', 'Dragon', 'Orc', 'Demon Skeleton'],
      note: 'Starter mission route',
      npcs: [
        {
          name: 'Semna',
          focus: 'Rotworm',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/b/bb/Semna.png/revision/latest/scale-to-width-down/83?cb=20240301191641',
          steps: ['Kill 50 Carrion Worms.', 'Kill 80 Skeletons.', 'Kill 120 Cyclops.']
        },
        {
          name: 'Orion Npc',
          focus: 'Demon Skeleton',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/0/0e/Orion.png/revision/latest/scale-to-width-down/86?cb=20240301191717',
          steps: [
            'Bring me 1x Tear of Daraman (dropped by Demon Skeleton).',
            'Kill 300 of Bog Raiders.',
            'Then bring me 50 green dragon scales (dropped by Dragon).'
          ]
        },
        {
          name: 'Graeme',
          focus: 'Dragon',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/9/93/Graeme.png/revision/latest',
          steps: ['I want to acquire a Red Dragon Claw. Can you assist me in finding one.']
        },
        {
          name: 'Lady Menna',
          focus: 'Orc',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/1/12/Lady_Menna.png/revision/latest/scale-to-width-down/100?cb=20240301191916',
          steps: [
            'Please be cautious. This statue is guarded by five protectors, and you will need to defeat them in order to complete the ritual and free my sister\'s soul (Skeleton Spawn).'
          ]
        },
        {
          name: 'Captain Jack',
          focus: 'Promotion / City',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/e/e6/Captain_Jack.png/revision/latest/scale-to-width-down/90?cb=20240301191950',
          steps: [
            'Dragon Lord stole my Citizen Doll, and I want your help to get it back for me (Dragon Lord Spawn).',
            'My mission for you now is to check your strength. In the Necromancer statue, known as the Hero Statue, you can touch it and come back to me (Necromancer Spawn).',
            'Npc will take u to QUEST and better to have 5 ppl with EK to do it easy.'
          ]
        }
      ]
    },
    {
      area: '200 Area',
      creatures: ['Hydra', 'Banshee', 'Stampor', 'Frost Dragon'],
      note: 'Mid-game progression',
      npcs: [
        {
          name: 'Viktor',
          focus: 'Frost Dragon',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/c/ca/Viktor.png/revision/latest/scale-to-width-down/100?cb=20240301192137',
          steps: ['acquire a 100x shards.']
        },
        {
          name: 'Chondur',
          focus: 'Stampor',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/3/34/Chondur.png/revision/latest/scale-to-width-down/100?cb=20240301192210',
          steps: ['acquire a 25 stampor horns, 25 stampor talons and 25 hollow stampor hoofs.']
        },
        {
          name: 'Mythical Elf',
          focus: 'Banshee',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/7/7d/Mythical_Elf_NPC.png/revision/latest/scale-to-width-down/100?cb=20240301192314',
          steps: [
            'Please bring to me 100x seacrest scales (dropped by Serpent Spawn).',
            'You need to eliminate 750 Banshee.',
            "I'd like your assistance in collecting 100x hellspawn tail (dropped by Hellspawn), 100x slime moulds (dropped by Servants), 100x necromantic robe (dropped by Necromancer)."
          ]
        },
        {
          name: 'Little Angel',
          focus: 'Hydra',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/2/25/Little_Angel_npc.png/revision/latest/scale-to-width-down/84?cb=20240301192058',
          steps: [
            'You need to bring me 10 red pieces of cloth (dropped by Elite Akrabuut), 10 hydra eggs (dropped by The Many), 10 soul orbs (dropped by Furyosa).',
            'You need to eliminate 500 Warlocks, but you must be cautious as they are known for their cunning.',
            'You need to find the Little Angel Wand, which can be acquired with Diamonds. It was stolen from me (Diamond Servant -3).'
          ]
        }
      ]
    },
    {
      area: '350 Island',
      creatures: ['Dark Magician', 'Black Knight', 'Infernalist', 'Elfs'],
      note: 'Access and island questline',
      npcs: [
        {
          name: 'The King',
          focus: '350 Island - Dark Magician',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/4/41/The_King_NPC.png/revision/latest/scale-to-width-down/100?cb=20240301192344',
          steps: [
            'I want to acquire a 75 ankhs (dropped by Dark Apprentice, Dark Magician and Dark Monk) and 10x nettle blossoms (dropped by Plagueroot). Can you assist me in finding them.'
          ]
        },
        {
          name: 'Hakem',
          focus: '350 Island - Black Knight',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/0/04/Hakem.png/revision/latest/scale-to-width-down/69?cb=20240301192413',
          steps: [
            'Bring me 1x thorn seed (dropped by Black Knight), and once you return.',
            'Kill 700 of Infernalist, be careful on yourself.',
            'Please retrieve my magical music notes; they were stolen by elves. I live alone here, and recovering these items is important to me.'
          ]
        },
        {
          name: 'Yehia',
          focus: '350 Island - Infernalist',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/3/3b/Yehia.png/revision/latest/scale-to-width-down/84?cb=20240301192513',
          steps: ['kill 5 Death Mage and come back to me.']
        },
        {
          name: 'Destma',
          focus: '350 Island - Elfs',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/5/5d/Destma.png/revision/latest/scale-to-width-down/91?cb=20240301192546',
          steps: ['Then bring me 1x old silver key (dropped by elves). and come back to me', 'give acces to Pirate Island.']
        }
      ]
    },
    {
      area: '600 Area',
      creatures: ['Spidris', 'Darken Elite', 'Lizard Chosen', 'Behemoth'],
      note: 'Advanced mission route',
      npcs: [
        {
          name: 'Golden Lords',
          focus: 'Behemoth',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/b/b4/Golden_Lord.png/revision/latest/scale-to-width-down/92?cb=20240301192701',
          steps: [
            'Then bring me 100 perfect behemoth fangs (Behemoth), unholy bones (Undead Dragon), demonic essences (Grim Reaper), and mind stones (Lich). Then I\'ll consider you worthy of bearing the Hero title.',
            'Kill 1000 of Golden Lords, that should put an end to whatever they are planning.',
            'Then bring me 100 fiery hearts.'
          ]
        },
        {
          name: 'Saif',
          focus: 'Darken Elite',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/e/e3/Saif.png/revision/latest/scale-to-width-down/100?cb=20240301192726',
          steps: [
            'Good bring me 10x draken sulphurs (dropped by Paiz The Pauperizer), 10x behemoth claws (dropped by Stonecracker), 10x shamanic hoods (dropped by Heartless) and 100x corrupted flags (dropped by Lizard Chosen).'
          ]
        },
        {
          name: 'Drakonix',
          focus: 'Lizard Chosen',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/5/5d/Drakonix.png/revision/latest/scale-to-width-down/85?cb=20240301192758',
          steps: [
            'To prove to me that you really want to continue the missions with me, I need 400,000,000 golden coins (400 gold nuggets).',
            'Kill 2000 Lizards Chosen. Be careful and take care of yourself.',
            'Then bring me Ferumbras\' hat (dropped by Ferumbras).'
          ]
        },
        {
          name: 'Marshal Celeste',
          focus: 'Spidris',
          image: 'https://static.wikia.nocookie.net/evolisca-tibia/images/6/6a/Marshal_Celeste.png/revision/latest/scale-to-width-down/100?cb=20240301192827',
          steps: [
            'I want to acquire a 100 compound eyes (dropped by Spitter), 100 crawler head platings (dropped by Crawler) and 100 waspoid claws (dropped by Waspoid). Can you assist me in finding them.'
          ]
        }
      ]
    },
    {
      area: '1200 Area',
      creatures: ['Vexclaw', 'Defiler', 'Azure Dragon', 'Dark Sorcerer', 'Demon'],
      note: 'High-level hunting lineup',
      npcs: []
    }
  ];

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Cross-Referenced NPCs</span>
          <h1>NPC Mission Guide</h1>
          <p>
            Verified against the Fandom NPC list and displayed with adjacent images for quicker identification.
          </p>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Area Order</span>
            <h2>Quick Route</h2>
          </div>

          <div className="start-list">
            {npcSections.map((section) => (
              <div key={section.area} className="start-item">
                <span className="start-dot" />
                <p>
                  <strong>{section.area}</strong> - {section.creatures.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Verified List</span>
            <h2>NPCs by Area</h2>
            <p>Each NPC row includes the matching image from the reference page.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '18px' }}>
          {npcSections.map((section) => (
            <article key={section.area} className="panel" style={{ padding: '22px', borderRadius: '18px' }}>
              <div style={{ marginBottom: '18px' }}>
                <span className="eyebrow">{section.creatures.join(', ')}</span>
                <h3 style={{ margin: '8px 0 0 0' }}>{section.area}</h3>
                <p style={{ margin: '10px 0 0 0', color: 'var(--text-muted)' }}>{section.note}</p>
              </div>

              {section.npcs.length > 0 ? (
                <div style={{ display: 'grid', gap: '14px' }}>
                  {section.npcs.map((npc) => (
                    <div
                      key={npc.name}
                      style={{
                        border: '1px solid var(--line)',
                        borderRadius: '16px',
                        padding: '16px',
                        background: 'rgba(13, 18, 32, 0.45)'
                      }}
                    >
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '56px minmax(0, 1fr) auto',
                          gap: '14px',
                          alignItems: 'start',
                          marginBottom: '12px'
                        }}
                      >
                        <img
                          src={npc.image}
                          alt={npc.name}
                          width={56}
                          height={56}
                          loading="lazy"
                          style={{
                            borderRadius: '14px',
                            objectFit: 'cover',
                            border: '1px solid var(--line)',
                            background: 'rgba(255, 255, 255, 0.04)'
                          }}
                        />

                        <div>
                          <strong style={{ display: 'block', fontSize: '1.05rem' }}>{npc.name}</strong>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{npc.focus}</span>
                        </div>

                        <span
                          className="chip"
                          style={{
                            backgroundColor: '#fbbf24' + '20',
                            borderColor: '#fbbf24' + '40',
                            color: '#fbbf24',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          Verified
                        </span>
                      </div>

                      <ol style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '10px' }}>
                        {npc.steps.map((step, index) => (
                          <li key={`${npc.name}-${index}`} style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ padding: '18px', border: '1px dashed var(--line)', borderRadius: '16px', color: 'var(--text-muted)' }}>
                  No NPC entries from the reference list were confirmed for this area yet.
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
