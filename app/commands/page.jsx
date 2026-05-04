'use client';

export const dynamic = 'force-dynamic';

import { useState, useMemo } from 'react';
import { X } from 'lucide-react';

export default function CommandsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewType, setPreviewType] = useState(null); // 'find' or 'monster'
  const [showItemPreview, setShowItemPreview] = useState(false);
  const [showMonsterPreview, setShowMonsterPreview] = useState(false);

  const commandsData = {
    'System & Status': {
      icon: '⚙️',
      color: '#87ceeb',
      commands: [
        {
          name: 'Commands',
          syntax: ['!commands', '/commands'],
          description: 'Display all available in-game commands and their functions. This is your reference guide for all interactive commands you can use to enhance your gameplay experience.',
          category: 'System & Status'
        },
        {
          name: 'Online Players',
          syntax: ['!online', '/online'],
          description: 'Check the list of all players currently online in the game world. Useful for finding friends, party members, or monitoring activity levels in your area.',
          category: 'System & Status'
        },
        {
          name: 'Server Uptime',
          syntax: ['!uptime', '/uptime'],
          description: 'Display how long the game server has been running continuously. Helps you understand server stability and when the last maintenance reset occurred.',
          category: 'System & Status'
        },
        {
          name: 'PvP Information',
          syntax: ['!pvp', '/pvp'],
          description: 'Get detailed information about the current PvP system settings, rules, and your personal PvP status. Understand skull mechanics, combat penalties, and protection modes.',
          category: 'System & Status'
        },
        {
          name: 'Character Time',
          syntax: ['!time'],
          description: 'Check the current server time and any character-specific timers or cooldowns. Useful for planning activities and understanding time-based mechanics.',
          category: 'System & Status'
        }
      ]
    },
    'Character Management': {
      icon: '👤',
      color: '#ffb380',
      commands: [
        {
          name: 'Change Sex',
          syntax: ['!changesex'],
          description: 'Change your character\'s gender between male and female. This is a customization option for your character appearance and identity. Cost: 2 premium days.',
          category: 'Character Management'
        },
        {
          name: 'Non-PvP Mode',
          syntax: ['!nonpvp'],
          description: 'Toggle PvP mode on or off for your character. When disabled, you cannot engage in player versus player combat and gain protection from other players. Essential for peaceful gameplay.',
          category: 'Character Management'
        },
        {
          name: 'Change Stats Display',
          syntax: ['!changestats'],
          description: 'Switch your HP and Mana display between absolute numbers and percentage format. Choose what works best for your playstyle and monitoring preferences.',
          category: 'Character Management'
        },
        {
          name: 'Frags Count',
          syntax: ['!frags', '/frags'],
          description: 'Display your character\'s total kill count (frags). Track your combat achievements and see how many players you\'ve defeated in PvP encounters.',
          category: 'Character Management'
        }
      ]
    },
    'Combat & Skills': {
      icon: '⚔️',
      color: '#ff6b6b',
      commands: [
        {
          name: 'Spells List',
          syntax: ['!spells'],
          description: 'Check your recently cast spells and current spell configuration. Review what magic abilities you have available and your spell history.',
          category: 'Combat & Skills'
        },
        {
          name: 'Magic Effects',
          syntax: ['!magiceffect'],
          description: 'Enable or disable magical effect animations in combat. Toggle visual effects from spells to reduce visual clutter or improve performance.',
          category: 'Combat & Skills'
        },
        {
          name: 'Distance Effects',
          syntax: ['!distanceeffect'],
          description: 'Enable or disable ranged attack visual effects. Control visibility of arrows, projectiles, and other ranged combat animations.',
          category: 'Combat & Skills'
        },
        {
          name: 'Spell Text',
          syntax: ['!spelltext'],
          description: 'Enable or disable the display of spell names and effects above your character. Customize your combat information display.',
          category: 'Combat & Skills'
        },
        {
          name: 'Damage Display Mode',
          syntax: ['!showdamage'],
          description: 'Switch between different damage visualization modes. See damage numbers in different formats or styles.',
          category: 'Combat & Skills'
        },
        {
          name: 'Damage Percentage Display',
          syntax: ['!percents'],
          description: 'Toggle damage percentages on or off in your combat display. Show relative damage percentages alongside absolute damage values.',
          category: 'Combat & Skills'
        },
        {
          name: 'Bless System',
          syntax: ['!bless'],
          description: 'Add or manage blessings on your character for protection. Blessings reduce experience loss upon death and can save you from permanent damage.',
          category: 'Combat & Skills'
        }
      ]
    },
    'Items & Inventory': {
      icon: '🎒',
      color: '#90ee90',
      commands: [
        {
          name: 'Backpack Purchase',
          syntax: ['!bp', '!backpack', '!bp list'],
          description: 'Purchase a backpack to expand your carrying capacity. Use "!bp" or "!backpack" to buy one (costs 1 crystal coin), or "!bp list" to view available backpack options.',
          category: 'Items & Inventory'
        },
        {
          name: 'Auto Loot System',
          syntax: ['!autoloot', '!autolootclient'],
          description: 'Configure automatic loot collection from defeated enemies. Use "!autoloot" to check auto loot system commands and "!autolootclient" for client-side auto loot configuration.',
          category: 'Items & Inventory'
        },
        {
          name: 'Find Item',
          syntax: ['!find', '!finditem itemname'],
          description: 'Search for items in the game world using natural language. Use "!find itemname" or "!finditem itemname" to open a window showing item locations and details.',
          category: 'Items & Inventory'
        }
      ]
    },
    'Events & Activities': {
      icon: '🎉',
      color: '#ffd700',
      commands: [
        {
          name: 'Join Event',
          syntax: ['!joinevent'],
          description: 'Participate in active in-game events. Join limited-time events, seasonal activities, and special competitions happening on the server.',
          category: 'Events & Activities'
        },
        {
          name: 'Hunt Time Check',
          syntax: ['!huntleft'],
          description: 'Check your remaining hunt time or kill count for current hunting quests. Track progress toward hunt completion and know when you\'ll finish.',
          category: 'Events & Activities'
        },
        {
          name: 'Spawn Hunt System',
          syntax: ['!spawnhunt'],
          description: 'Access the spawn hunt system to manage your hunting activities and targets. Engage in group hunting events and monster hunts.',
          category: 'Events & Activities'
        },
        {
          name: 'Spawn Slots',
          syntax: ['!spawnslots'],
          description: 'Check how many spawn hunting slots are available for your character. Spawns are limited resources; verify your available hunting spots.',
          category: 'Events & Activities'
        },
        {
          name: 'Spawn Timer',
          syntax: ['!spawntime'],
          description: 'Check detailed spawn timer information for creatures and hunting areas. Plan your hunts based on spawn schedules.',
          category: 'Events & Activities'
        },
        {
          name: 'Dungeon Timer',
          syntax: ['!dungtime'],
          description: 'Check the remaining time on your dungeon exploration timer. Dungeons have cooldown periods; check when you can return.',
          category: 'Events & Activities'
        },
        {
          name: 'Boss Charges',
          syntax: ['!charges'],
          description: 'Check information about boss monster charges and cooldowns. Understand when you can fight bosses again and how many attempts remain.',
          category: 'Events & Activities'
        },
        {
          name: 'Protection Zone Timer',
          syntax: ['!pz'],
          description: 'Check your protection zone timer. Protection zones prevent combat; understand when you can leave or when you\'re blocked from leaving.',
          category: 'Events & Activities'
        }
      ]
    },
    'Bosses & Quests': {
      icon: '👹',
      color: '#e74c3c',
      commands: [
        {
          name: 'Boss List',
          syntax: ['!bosses'],
          description: 'View a complete list of all in-game bosses with your personal kill tracking. Monitor which bosses you\'ve defeated and which are still unchallenged, helping you track talent progress.',
          category: 'Bosses & Quests'
        },
        {
          name: 'Task Boss Window',
          syntax: ['!taskboss'],
          description: 'Open the boss task management window. Manage boss-related quest tasks, track objectives, and monitor your progress on boss hunts.',
          category: 'Bosses & Quests'
        },
        {
          name: 'Guild War',
          syntax: ['!war'],
          description: 'Invite another guild to war or accept a war declaration. Engage in large-scale PvP combat between entire guilds with strategic gameplay.',
          category: 'Bosses & Quests'
        },
        {
          name: 'Fix Task',
          syntax: ['!fixtask'],
          description: 'Reset and fix a task if it encounters problems or becomes stuck. Use this if your quest progress is bugged or needs resetting.',
          category: 'Bosses & Quests'
        },
        {
          name: 'Report Issues',
          syntax: ['!report'],
          description: 'Report non-urgent bugs, leave feedback, or provide suggestions to improve the game. Help the developers make Evolisca better.',
          category: 'Bosses & Quests'
        }
      ]
    },
    'Spells & Magic': {
      icon: '🔮',
      color: '#9b59b6',
      commands: [
        {
          name: 'Magic Wall List',
          syntax: ['!magicwall'],
          description: 'Open the magic wall list to see available protective magic walls. Browse and manage magical protection structures for base defense.',
          category: 'Spells & Magic'
        }
      ]
    },
    'Character Systems': {
      icon: '✨',
      color: '#f39c12',
      commands: [
        {
          name: 'Upgrade System',
          syntax: ['!upgrade'],
          description: 'Access the upgrade system to improve your equipment and items. Enhance weapons, armor, and gear to increase your power.',
          category: 'Character Systems'
        },
        {
          name: 'Anti-Bot System',
          syntax: ['!antibot'],
          description: 'Answer the anti-bot system prompt to verify you\'re a real player. Complete verification challenges to maintain account security.',
          category: 'Character Systems'
        },
        {
          name: 'Monster Inspector',
          syntax: ['!monster', '!monster monstername'],
          description: 'Open a window to inspect and view detailed information about monsters using natural language. Use "!monster monstername" to quickly look up creature stats, drops, and abilities.',
          category: 'Character Systems'
        },
        {
          name: 'Monster Outfit Test',
          syntax: ['!monsteroutfit'],
          description: 'Open the monster outfit test system to preview different creature appearances and forms. Try on various monster outfits.',
          category: 'Character Systems'
        },
        {
          name: 'Cosmetics System',
          syntax: ['!cosmetics'],
          description: 'Access the cosmetics system to customize your character appearance. Buy and equip cosmetic items for unique visual presentation.',
          category: 'Character Systems'
        }
      ]
    },
    'Guild Commands': {
      icon: '🏰',
      color: '#16a085',
      commands: [
        {
          name: 'Join Guild',
          syntax: ['!joinguild'],
          description: 'Quick access to join or manage your guild. Open the guild interface to view available guilds, send join requests, or accept invitations from guild leaders.',
          category: 'Guild Commands'
        },
        {
          name: 'Guild Balance',
          syntax: ['!gbalance'],
          description: 'Check your guild\'s total balance and financial status. View accumulated resources and treasury information.',
          category: 'Guild Commands'
        },
        {
          name: 'Guild Broadcast',
          syntax: ['!bg'],
          description: 'Send a message to all online guild members simultaneously. Announce important information to your entire active guild roster.',
          category: 'Guild Commands'
        },
        {
          name: 'Guild Outfit Sync',
          syntax: ['!go'],
          description: 'Change the outfit of all your guild members to match yours. Synchronize member appearances for unity and identification.',
          category: 'Guild Commands'
        }
      ]
    },
    'House Management': {
      icon: '🏠',
      color: '#d35400',
      commands: [
        {
          name: 'Buy House',
          syntax: ['!buyhouse'],
          description: 'Purchase a house you\'re standing in front of. Owning a house provides storage space, a personal base, and control over who enters.',
          category: 'House Management'
        },
        {
          name: 'Sell House',
          syntax: ['alana grav', '!sellhouse'],
          description: 'Sell your house back to the system. Use the incantation "alana grav" or command "!sellhouse" to sell your property.',
          category: 'House Management'
        },
        {
          name: 'Leave House Ownership',
          syntax: ['!leavehouse'],
          description: 'Relinquish your ownership of a house without selling it. The house becomes available for others to purchase.',
          category: 'House Management'
        },
        {
          name: 'Kick House Occupant',
          syntax: ['alana sio'],
          description: 'Remove a player from your house. Use the incantation "alana sio" to kick unwanted guests from your property.',
          category: 'House Management'
        },
        {
          name: 'Edit Door List',
          syntax: ['aleta grav'],
          description: 'Edit your house door access list. Use "aleta grav" incantation to control who can open your house doors.',
          category: 'House Management'
        },
        {
          name: 'Edit Guest List',
          syntax: ['aleta sio'],
          description: 'Edit your house guest list and permissions. Use "aleta sio" incantation to manage who can stay in your house.',
          category: 'House Management'
        },
        {
          name: 'Edit Subowner List',
          syntax: ['aleta som'],
          description: 'Edit your house subowner list to grant management permissions. Use "aleta som" incantation to designate house subowners with control rights.',
          category: 'House Management'
        }
      ]
    }
  };

  // Flatten all commands for searching
  const allCommands = Object.values(commandsData).flatMap(cat => cat.commands);

  // Filter commands
  const filteredCommands = useMemo(() => {
    return allCommands.filter(cmd => {
      const matchesSearch = 
        cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.syntax.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Group filtered commands by category
  const groupedFilteredCommands = useMemo(() => {
    const grouped = {};
    filteredCommands.forEach(cmd => {
      if (!grouped[cmd.category]) {
        grouped[cmd.category] = [];
      }
      grouped[cmd.category].push(cmd);
    });
    return grouped;
  }, [filteredCommands]);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Player's Guide</span>
          <h1>In-Game Commands Reference</h1>
          <p>
            Master every command in Evolisca. Whether you're managing your character, controlling your house, or exploring the world—find all the commands you need in one comprehensive guide.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>{allCommands.length}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Total Commands</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>{Object.keys(commandsData).length}</strong>
              <span style={{ color: 'var(--text-muted)' }}>Categories</span>
            </div>
            <div>
              <strong style={{ color: 'var(--gold)', display: 'block', fontSize: '1.3rem' }}>30+</strong>
              <span style={{ color: 'var(--text-muted)' }}>Features</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Categories</span>
            <h2>Command Types</h2>
          </div>

          <div style={{ display: 'grid', gap: '8px' }}>
            {Object.entries(commandsData).map(([category, data]) => (
              <div 
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? 'all' : category)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: selectedCategory === category ? `${data.color}20` : 'rgba(100, 150, 255, 0.05)',
                  border: selectedCategory === category ? `2px solid ${data.color}` : '1px solid rgba(100, 150, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '0.85rem',
                  fontWeight: selectedCategory === category ? '600' : '500',
                  color: selectedCategory === category ? data.color : 'var(--text)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = `${data.color}20`}
                onMouseLeave={(e) => e.currentTarget.style.background = selectedCategory === category ? `${data.color}20` : 'rgba(100, 150, 255, 0.05)'}
              >
                <span style={{ fontSize: '1rem' }}>{data.icon}</span>
                <span>{category}</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.7, fontWeight: '600' }}>
                  {commandsData[category].commands.length}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* Search Section */}
      <section className="content-section" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gap: '12px' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
              Search Commands
            </label>
            <input
              type="text"
              placeholder="Search by command name, syntax, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-soft)',
                color: 'var(--text)',
                fontSize: '0.95rem',
              }}
            />
          </div>

          {/* Results Counter */}
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            {selectedCategory !== 'all' && (
              <span>
                Filtered to: <strong>{selectedCategory}</strong> •{' '}
              </span>
            )}
            Showing {filteredCommands.length} of {allCommands.length} commands
            {searchQuery && <span> (Search: "{searchQuery}")</span>}
          </div>
        </div>
      </section>

      {/* Commands Display */}
      {filteredCommands.length > 0 ? (
        <section className="content-section">
          <div style={{ display: 'grid', gap: '24px' }}>
            {selectedCategory === 'all' ? (
              // Display all categories
              Object.entries(commandsData).map(([category, categoryData]) => {
                const categoryCmds = groupedFilteredCommands[category] || [];
                if (categoryCmds.length === 0) return null;

                return (
                  <div key={category}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid var(--line)' }}>
                      <span style={{ fontSize: '1.5rem' }}>{categoryData.icon}</span>
                      <h2 style={{ margin: 0, color: categoryData.color, fontSize: '1.2rem', fontWeight: '600' }}>
                        {category}
                      </h2>
                      <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>
                        {categoryCmds.length} command{categoryCmds.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                      {categoryCmds.map((cmd) => (
                        <CommandCard
                          key={cmd.name}
                          command={cmd}
                          categoryColor={categoryData.color}
                          onSyntaxClick={(type) => {
                            if (type === 'find') setShowItemPreview(true);
                            if (type === 'monster') setShowMonsterPreview(true);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              // Display selected category only
              <div>
                {Object.entries(commandsData).map(([category, categoryData]) => {
                  if (category !== selectedCategory) return null;

                  const categoryCmds = groupedFilteredCommands[category] || [];

                  return (
                    <div key={category}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid var(--line)' }}>
                        <span style={{ fontSize: '1.5rem' }}>{categoryData.icon}</span>
                        <h2 style={{ margin: 0, color: categoryData.color, fontSize: '1.2rem', fontWeight: '600' }}>
                          {category}
                        </h2>
                        <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>
                          {categoryCmds.length} command{categoryCmds.length !== 1 ? 's' : ''}
                        </span>
                      </div>

                      <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                        {categoryCmds.map((cmd) => (
                          <CommandCard
                            key={cmd.name}
                            command={cmd}
                            categoryColor={categoryData.color}
                            onSyntaxClick={(type) => {
                              if (type === 'find') setShowItemPreview(true);
                              if (type === 'monster') setShowMonsterPreview(true);
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="content-section">
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No commands found</h3>
            <p>Try adjusting your search query or filter category</p>
          </div>
        </section>
      )}

      {/* Item Finder Modal */}
      {showItemPreview && (
        <ItemFinderModal onClose={() => setShowItemPreview(false)} />
      )}

      {/* Monster Inspector Modal */}
      {showMonsterPreview && (
        <MonsterInspectorModal onClose={() => setShowMonsterPreview(false)} />
      )}
    </main>
  );
}

// Item Finder Modal Component
function ItemFinderModal({ onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg)',
        border: '2px solid var(--line-strong)',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text)',
            fontSize: '24px',
            padding: '0',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={24} />
        </button>

        <h2 style={{ margin: '0 0 16px 0', color: 'var(--text)', fontSize: '1.5rem' }}>Show Text</h2>

        <div style={{
          background: 'var(--bg-soft)',
          border: '1px solid var(--line)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ display: 'block', color: 'var(--text)', marginBottom: '8px' }}>Item: ape fur</strong>
            <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Item ID: 5883</span>
            <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Possible sources (4):</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginTop: '12px'
          }}>
            {[
              { name: 'King Kong', drop: '37.50%' },
              { name: 'Kongra', drop: '15.50%' },
              { name: 'Merklin', drop: '1.00%' },
              { name: 'Sibang', drop: '0.500%' }
            ].map((item) => (
              <div key={item.name} style={{
                background: 'rgba(255, 160, 0, 0.1)',
                border: '1px solid rgba(255, 160, 0, 0.3)',
                borderRadius: '6px',
                padding: '8px',
                textAlign: 'center',
                color: 'var(--text)'
              }}>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600' }}>{item.name}</span>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--gold)', fontWeight: '700', marginTop: '4px' }}>{item.drop}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #4a7c59, #5a9c6f)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          OK
        </button>
      </div>
    </div>
  );
}

// Monster Inspector Modal Component
function MonsterInspectorModal({ onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg)',
        border: '2px solid var(--line-strong)',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text)',
            fontSize: '24px',
            padding: '0',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={24} />
        </button>

        <h2 style={{ margin: '0 0 16px 0', color: 'var(--text)', fontSize: '1.5rem' }}>Monster Inspect</h2>

        <div style={{
          background: 'var(--bg-soft)',
          border: '1px solid var(--line)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '16px', alignItems: 'start' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(100, 200, 100, 0.2)',
              border: '1px solid rgba(100, 200, 100, 0.4)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem'
            }}>
              🐉
            </div>

            <div>
              <strong style={{ display: 'block', color: 'var(--text)', fontSize: '1.1rem', marginBottom: '8px' }}>Name:</strong>
              <span style={{ display: 'block', color: 'var(--text)', fontSize: '0.95rem', marginBottom: '12px' }}>Dragon</span>

              <strong style={{ display: 'block', color: '#ff6b6b', fontSize: '1rem', marginBottom: '4px' }}>Health:</strong>
              <span style={{ display: 'block', color: 'var(--text)', fontSize: '0.95rem', marginBottom: '12px' }}>8,200</span>

              <strong style={{ display: 'block', color: '#ffb347', fontSize: '1rem', marginBottom: '4px' }}>Exp:</strong>
              <span style={{ display: 'block', color: 'var(--text)', fontSize: '0.95rem', marginBottom: '12px' }}>4,500</span>
            </div>
          </div>

          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
            <strong style={{ display: 'block', color: 'var(--text)', marginBottom: '12px', fontSize: '0.95rem' }}>Loot:</strong>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
              gap: '12px'
            }}>
              {[
                { item: '🪙', label: 'Gold', drop: '37.50%' },
                { item: '🍗', label: 'Raw Meat', drop: '15.50%' },
                { item: '🍄', label: 'Mushroom', drop: '1.00%' },
                { item: '🎁', label: 'Treasure', drop: '0.500%' },
                { item: '⚔️', label: 'Sword', drop: '0.025%' },
                { item: '🔮', label: 'Gem', drop: '2.03%' }
              ].map((loot) => (
                <div key={loot.label} style={{
                  background: 'rgba(200, 150, 100, 0.1)',
                  border: '1px solid rgba(200, 150, 100, 0.3)',
                  borderRadius: '6px',
                  padding: '12px 8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{loot.item}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text)', marginBottom: '4px', fontWeight: '600' }}>{loot.label}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: '700' }}>{loot.drop}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '12px',
            background: 'linear-gradient(135deg, #4a7c59, #5a9c6f)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Command Card Component
function CommandCard({ command, categoryColor, onSyntaxClick }) {
  return (
    <div
      className="panel"
      style={{
        padding: '20px',
        borderRadius: '12px',
        display: 'grid',
        gap: '12px',
        border: `1px solid var(--line)`,
        background: 'var(--bg-elevated)',
        transition: 'all 0.3s',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = categoryColor;
        e.currentTarget.style.boxShadow = `0 4px 12px ${categoryColor}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--line)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Command Name */}
      <strong style={{ fontSize: '1.05rem', color: categoryColor }}>
        {command.name}
      </strong>

      {/* Description */}
      <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
        {command.description}
      </p>

      {/* Command Syntax */}
      <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Syntax:
        </span>
        <div style={{ display: 'grid', gap: '6px' }}>
          {command.syntax.map((syntax, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (syntax.includes('find') || syntax.includes('!find')) {
                  onSyntaxClick('find');
                } else if (syntax.includes('monster') && !syntax.includes('monsteroutfit')) {
                  onSyntaxClick('monster');
                }
              }}
              style={{
                padding: '8px 12px',
                borderRadius: '6px',
                background: 'var(--bg-soft)',
                border: `1px solid ${categoryColor}40`,
                color: categoryColor,
                fontFamily: 'Courier New, monospace',
                fontSize: '0.85rem',
                fontWeight: '600',
                wordBreak: 'break-word',
                cursor: (syntax.includes('find') || (syntax.includes('monster') && !syntax.includes('monsteroutfit'))) ? 'pointer' : 'default',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (syntax.includes('find') || (syntax.includes('monster') && !syntax.includes('monsteroutfit'))) {
                  e.currentTarget.style.borderColor = categoryColor;
                  e.currentTarget.style.background = `${categoryColor}15`;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${categoryColor}40`;
                e.currentTarget.style.background = 'var(--bg-soft)';
              }}
            >
              {syntax}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
