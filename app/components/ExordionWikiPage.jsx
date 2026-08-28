import Image from 'next/image';

const sections = [
  ['overview', 'Overview & Server Identity'],
  ['worlds', 'Worlds & History'],
  ['progression', 'Progression & Rates'],
  ['systems', 'Custom Systems & Content'],
  ['raids', 'Raids, Bosses & Elite Monsters'],
  ['map', 'Map & Hunting Areas'],
  ['client', 'Client & Quality of Life'],
  ['pvp', 'PvP, Rules & Player Safety'],
  ['community', 'Community & How to Start'],
  ['ecosystem', 'The Open Tibia Ecosystem'],
  ['external-links', 'External Links'],
];

const systemCards = [
  ['Rarity System', 'Equipment can gain rarity and Item Power beyond the base 7.4 item. Fragments, Special Orbs, the Orb Machine, and the Rarity Market are part of the documented item loop.'],
  ['Crafting', 'Crafting has its own official wiki page. Recipes, materials, stations, and costs should be checked in the live guide before resources are committed.'],
  ['Elite Monsters', 'Selected creatures can appear as Green Skull, Red Skull, or Black Skull Elite versions with special drop pools and higher difficulty.'],
  ['Bestiary', 'The Bestiary and Hunting Guide support creature discovery, hunt planning, and exploration as the custom world expands.'],
  ['Tasks System', 'Tasks, task slots, task scrolls, and task rewards add structured objectives to normal hunting and group progression.'],
  ['Dungeons', 'Dungeon summons scale with the dungeon’s level or difficulty. A level 65 Rookgaard dungeon is specifically named in the public update trail.'],
  ['Sacrifice System', 'Sacrifice uses Exordion Coins to initiate or affect raid content. Cooldowns and temporary discounts depend on current announcements.'],
  ['Daily Systems', 'Daily Reward, Bonus Exp, Stamina, Safe Zone, Training, Blessings, and Boss Reward System are all named in the official wiki navigation.'],
  ['Casino Island', 'Casino Games and Casino Island provide a social activity outside the usual hunt, task, boss, and dungeon progression loops.'],
  ['Rarity Market', 'The Rarity Market gives rarity-related equipment an economy layer. Current listing rules, prices, and availability should be verified in-game.'],
];

const worldRows = [
  ['Bravora', '11 March 2026 · 17:00 BRT / 21:00 CET', 'Current Exordion 7.4 chapter with public updates for new areas, raids, elites, and the launcher.'],
  ['Aegis', '11 August 2025', 'A competitive era and separate progression cycle in the shared Exordion universe.'],
  ['Legacy', '24 August 2024', 'The earliest named world, presented as a living record of player journeys.'],
];

const rateRows = [
  ['Experience', 'x1 in the public directory snapshot', 'Older owner/community material also mentions staged experience; confirm the permanent table.'],
  ['Skill and magic', 'Not published in the reviewed official pages', 'Do not infer values from the x1 EXP label.'],
  ['Loot and spawn', 'Not published in the reviewed official pages', 'Event boosts are time-limited and should not be treated as base rates.'],
  ['PvP', 'PVP directory signal', 'Read the official rules for skulls, frags, war, protection, and death loss.'],
];

const progressionRows = [
  ['Levels and hunting', 'Classic character levels remain the foundation, with a global plus custom map and new hunt content.'],
  ['Tasks and parties', 'Tasks, additional task slots, scrolls, rewards, shared experience, and party task credit are documented features.'],
  ['Items and crafting', 'Rarity, Item Power, fragments, Orbs, crafting, and the Rarity Market add long-term equipment decisions.'],
  ['Dungeons and bosses', 'Difficulty-scaled dungeons, Daily Bosses, Elite Raids, Sacrifice, and Bestiary goals extend progression after ordinary hunts.'],
];

const raidRows = [
  ['Raid Cooldown', 'Each raid tracks its own cooldown. The client module shows available raids, minimum levels, cities, locations, and filters.'],
  ['Boss Raid states', 'Boss encounters can display Starting or Alive states. Cooldown begins after the boss dies, not simply when the raid starts.'],
  ['Rookgaard bosses', 'Young Yeti, The Broodmother, and Zhaumor are named Boss Raid entries in the public update record.'],
  ['Rookgaard rotations', 'Named raids include Spiders, Snakes, Larvas, Chakoyas, Cathedral Bandits, Dwarves, Cyclops, Orc Land, and Wyverns.'],
  ['Daily Boss 200+', 'The Black Mire is located in Dawncrest and is described as a high-level daily challenge with exclusive rewards.'],
  ['Sacrifice gate', 'Ghazbaran enters the Sacrifice boss rotation when the server top level reaches 500.'],
];

const areaRows = [
  ['Rookgaard', 'Dark Cathedral, Cyclops island, Orc castle, Wyvern respawn, Dwarven Mines, Iron Camp, Sandshins, and Falcon island/Bastion.'],
  ['Mainland', 'Edron, Stonehome, Dawncrest, Ankrahmun, Carlin, and Thais, with custom hunts, raids, and dungeons layered onto the global map.'],
  ['Insectoids Island', 'Reached through Captain Marlow east of Edron in Stonehome. Named creatures include Insectoid Worker, Waspoid, Crawler, Spidris, and Kollos.'],
  ['Dark Cathedral', 'Redesigned Rookgaard floors with Dark Monks, Assassins, Ghouls, Beholders, Zombies, Vampires, Necromancers, and Heroes.'],
  ['Falcon content', 'Falcon Squire, Falcon Knight, Falcon Paladin, Falcon Medal, and Bastion Backpack are named in public updates.'],
  ['Dawncrest', 'The setting for The Black Mire, the documented Daily Boss 200+ encounter.'],
];

const clientRows = [
  ['Enhanced Client', 'A modern client layer built around Exordion’s classic 7.4 identity.'],
  ['New Launcher', 'Displays news and online streamers, links social channels, can close while the game continues, and is required for later updates.'],
  ['Raid Module', 'Filters raids by Rookgaard/Mainland and normal/boss type, then shows requirements, cooldowns, cities, and minimap locations.'],
  ['Hunting Guide', 'Helps players discover hunts and navigate the expanded world together with an updated Minimap.'],
  ['Auto Loot', 'Auto Loot, Loot Seller, Autoloot Money to Bank, and extra bag slots are named in the client or store navigation.'],
  ['Training', 'Trainer and 6-, 12-, and 24-hour Practice Scrolls are named in the published store-cost update.'],
  ['Combat feedback', 'Server Log damage/healing messages and animated colored healing and mana text improve combat readability.'],
];

const externalLinks = [
  ['Bravora official website', 'https://bravora.exordion.com.br/'],
  ['Bravora client download', 'https://bravora.exordion.com.br/?downloadclient'],
  ['Bravora rules', 'https://bravora.exordion.com.br/?rules'],
  ['Exordion official player wiki', 'https://exordion.gitbook.io/exordion-wiki'],
  ['Exordion Discord', 'https://discord.gg/K9RF9pCfvC'],
  ['Exordion roadmap', 'https://trello.com/b/lxIq3Jyc/exordion-roadmap'],
];

export default function ExordionWikiPage() {
  return (
    <div className="cyntara-wiki">
      <header className="cyntara-wiki__header">
        <h1>Exordion</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <main className="cyntara-wiki__content">
          <p><strong>Exordion</strong> is a custom Open Tibia project focused on the old-school 7.4 experience. Its current public identity centers on the Bravora world, a global plus custom map, persistent progression, an Enhanced Client, and systems such as rarity, crafting, tasks, dungeons, raids, daily bosses, bestiary progression, and Elite Monsters.</p>
          <p>Exordion keeps the familiar four-vocation foundation and classic Tibia geography while adding modern systems that change how players hunt, build equipment, organize parties, and plan endgame content. This page is a practical Exordion reference for players searching for the server, its rates, worlds, client, features, and official links.</p>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Server Identity</SectionHeading>
            <p>Exordion’s design goal is classic Tibia with fewer of the limitations associated with a historical client. The project advertises new areas, new monsters, exclusive systems, anti-bot protection, a global proxy, low-ping access, an Enhanced Client, frequent updates, and a no-reset philosophy.</p>
            <p>Bravora is the current Exordion 7.4 world. Its official launch trail places the opening on 11 March 2026 at 17:00 BRT / 21:00 CET. Aegis and Legacy are separate named worlds in the same broader universe, with their own progression histories and communities.</p>
            <div className="cyntara-wiki__callout"><strong>What kind of server is Exordion?</strong><p>It is not a strict historical 7.4 replica. The 7.4 foundation is combined with custom map areas, item rarity, crafting, elite tiers, dungeons, raid cooldowns, daily bosses, and a modern client layer.</p></div>
          </section>

          <section id="worlds">
            <SectionHeading>Worlds &amp; History</SectionHeading>
            <p>Exordion’s world structure is important when reading older guides or community posts. The project presents three named worlds as stages of one universe, but a feature or population claim from one world should not automatically be applied to another.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>World</th><th>Public launch date</th><th>Identity</th></tr></thead><tbody>{worldRows.map(([name, date, description]) => <tr key={name}><th>{name}</th><td>{date}</td><td>{description}</td></tr>)}</tbody></table></div>
            <p>The older community launch record describes Exordion as a Brazilian 8.0 global project with two worlds, staged experience, shared-experience bonuses, tasks, raids, an anti-bot client, and custom quality-of-life systems. That historical description is useful context, while the current Bravora listing identifies the active profile as 7.4.</p>
          </section>

          <section id="progression">
            <SectionHeading>Progression &amp; Rates</SectionHeading>
            <p>The public directory identifies Bravora as x1 EXP and PVP on version 7.4. The official pages and older owner material also reference staged experience and temporary party or global boosts. Because those terms describe different layers, players should confirm the live experience table rather than assuming x1 explains every level range.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Category</th><th>Known public signal</th><th>Practical meaning</th></tr></thead><tbody>{rateRows.map(([category, signal, meaning]) => <tr key={category}><th>{category}</th><td>{signal}</td><td>{meaning}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Progression loop</th><th>How it fits the Exordion experience</th></tr></thead><tbody>{progressionRows.map(([loop, description]) => <tr key={loop}><th>{loop}</th><td>{description}</td></tr>)}</tbody></table></div>
            <p>The official update trail records temporary Party x3 and Party x4 bonuses of 80% and 120% during a ten-day event, as well as a double task experience and gold event. These are useful examples of the live calendar, not permanent base rates.</p>
          </section>

          <section id="systems">
            <SectionHeading>Custom Systems &amp; Content</SectionHeading>
            <p>The official Exordion wiki is organized around Gameplay, Systems, Client, New Areas, and Tools. The following feature names are drawn from that player-facing index and the public update trail; the official pages remain the authority for current costs, requirements, recipes, and rewards.</p>
            <div className="grid gap-4 md:grid-cols-2">{systemCards.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
          </section>

          <section id="raids">
            <SectionHeading>Raids, Bosses &amp; Elite Monsters</SectionHeading>
            <p>Raids are a major part of Exordion’s endgame. Instead of relying only on a static boss list, the client provides raid status, filters, level requirements, locations, and individual cooldown information. This gives parties a way to plan content around availability and progression.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Encounter or system</th><th>Documented details</th></tr></thead><tbody>{raidRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <h3>Elite Drops and Golden Elites</h3>
            <p>Elite Drops are attached to selected Elite versions of creatures. Green Skull, Red Skull, and Black Skull categories are named in the update record. Referenced rewards include Demon Legs, Falcon Medal, Bone Fiddle, Dragon Scale Helmet, Nightmare Shield, Amazon Armor, Beholder Spellbook, and Native Armor.</p>
            <p>Golden Elites are described as an event-specific tier between Red and Black Skull. They are harder and more aggressive, do not use traditional loot, and can drop Special Orb fragments. Their availability and Item Power rules should be checked in the current event announcement.</p>
          </section>

          <section id="map">
            <SectionHeading>Map &amp; Hunting Areas</SectionHeading>
            <p>Exordion describes its world as Global + Custom Map. Players familiar with classic Tibia can use the original city and region layout as a starting point, but new islands, custom hunts, dungeons, and raid locations significantly expand the route through the world.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Area</th><th>Named public content</th></tr></thead><tbody>{areaRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <p>For current spawn details, use the official Hunting Guide, Bestiary, and Minimap. A copied hunt list can become inaccurate when a new monster, balance change, dungeon difficulty, or raid location is released.</p>
          </section>

          <section id="client">
            <SectionHeading>Client &amp; Quality of Life</SectionHeading>
            <p>The Enhanced Client and new Launcher are central to Exordion’s modern service layer. They preserve a classic visual and gameplay reference while making it easier to find content, follow updates, and reduce routine friction.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Feature</th><th>Documented purpose</th></tr></thead><tbody>{clientRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <p>Anti-bot protection and a global proxy are official project claims. The public pages reviewed do not publish the detection model, proxy locations, supported operating systems, or every prohibited program, so players should read the latest rules and launcher notices.</p>
          </section>

          <section id="pvp">
            <SectionHeading>PvP, Rules &amp; Player Safety</SectionHeading>
            <p>The public listing classifies Bravora as PVP, but a complete combat ruleset is not reproduced in this reference. Before starting a character, confirm skull behavior, unjustified kills, protection zones, war rules, death loss, multi-clienting, automation, account sharing, naming, punishments, and appeals on the official rules page.</p>
            <ul>
              <li>Use the official Bravora client download or current Launcher rather than an unverified mirror.</li>
              <li>Keep the client updated; later Exordion updates may require the newer Launcher.</li>
              <li>Separate permanent rates from temporary global boosts, festivals, party bonuses, and Golden Elite events.</li>
              <li>Verify Store, Bazaar, donation, refund, and account-recovery policies before spending money.</li>
              <li>Use official Discord or wiki pages to resolve conflicting advice about items, tasks, raids, or PvP.</li>
            </ul>
          </section>

          <section id="community">
            <SectionHeading>Community &amp; How to Start</SectionHeading>
            <p>The official site exposes Characters, Who Is Online, Highscores, Kill Statistics, Latest Deaths, Player Bans, Houses, Guilds, Live Casting, Streamers, Character Bazaar, Store, account recovery, and a roadmap. These services make it possible to understand the world before logging in.</p>
            <ol>
              <li>Choose Bravora, Aegis, or Legacy based on your group and preferred progression cycle.</li>
              <li>Read the current rules and check the official world status.</li>
              <li>Create an account and download the client from the official Bravora website.</li>
              <li>Use the wiki pages for Spells, Runes, Spirit, Training, Blessings, Tasks, Dungeons, Crafting, and Rarity.</li>
              <li>Join Discord for maintenance notices, event windows, launch updates, and practical player help.</li>
              <li>Begin with hunting, tasks, daily rewards, and Bestiary discovery before moving into dungeons and raids.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2"><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Community channels</h3><p className="mt-2 text-sm leading-7 text-black">Discord, WhatsApp, Instagram, YouTube, TikTok, and the roadmap are linked by the Exordion project.</p><div className="mt-3 flex flex-wrap gap-2"><a href="https://discord.gg/K9RF9pCfvC" target="_blank" rel="nofollow noopener noreferrer">Discord</a><a href="https://chat.whatsapp.com/DFzXDDqaOe2GGKmzKsKnig" target="_blank" rel="nofollow noopener noreferrer">WhatsApp</a></div></div><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Account and economy</h3><p className="mt-2 text-sm leading-7 text-black">Store, Donate Points, Character Bazaar, Houses, and account tools add an economy layer whose current prices and restrictions should be checked on the live service.</p><div className="mt-3 flex flex-wrap gap-2"><a href="https://bravora.exordion.com.br/" target="_blank" rel="nofollow noopener noreferrer">Bravora website</a><a href="https://trello.com/b/lxIq3Jyc/exordion-roadmap" target="_blank" rel="nofollow noopener noreferrer">Roadmap</a></div></div></div>
          </section>

          <section id="ecosystem">
            <SectionHeading>The Open Tibia Ecosystem</SectionHeading>
            <p>Open Tibia includes strict low-rate replicas, high-rate PvP worlds, global-map servers, and deeply customized RPG projects. Exordion occupies a middle ground: its 7.4 identity and familiar geography matter, but the defining experience comes from custom equipment progression, exploration, repeatable endgame content, and its client tooling.</p>
            <div className="cyntara-wiki__callout"><strong>Looking for Private Servers?</strong><p>Explore <a href="/">opentibiaservers.com</a>, the leading open tibia server listing directory for real-time status tracking, player counts, version filters, and community rankings across active OTServ projects.</p></div>
            <div className="cyntara-wiki__recommended"><h3>Recommended Open Tibia Server</h3><p>For players seeking a polished Open Tibia experience with custom bosses, active community events, and modern client features, <strong>Evomanias</strong> is highly recommended as a premier alternative.</p><a className="cyntara-wiki__button" href="https://evomanias.com/" target="_blank" rel="noopener noreferrer">Play Evomanias</a></div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{externalLinks.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="nofollow noopener noreferrer">{label}</a></li>)}</ul>
            <ul>
              <li><a href="/">OpenTibiaServers directory</a></li>
              <li><a href="https://evomanias.com/" target="_blank" rel="noopener noreferrer">Play Evomanias</a></li>
            </ul>
          </section>
        </main>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Exordion</div>
            <Image className="cyntara-wiki__logo" src="/images/server-logos/exordion.png" alt="Exordion official logo" width={260} height={180} />
            <table><tbody>
              <tr><th>World</th><td>Bravora</td></tr>
              <tr><th>Host</th><td><code>bravora.exordion.com.br:7171</code></td></tr>
              <tr><th>Region</th><td>USA listing / Brazilian project</td></tr>
              <tr><th>Server type</th><td>Custom global map</td></tr>
              <tr><th>Protocol</th><td>Exordion / Tibia 7.4</td></tr>
              <tr><th>PvP</th><td>PVP listing</td></tr>
              <tr><th>EXP</th><td>x1 listing signal</td></tr>
              <tr><th>Players</th><td>383 / 2000 snapshot</td></tr>
              <tr><th>Uptime</th><td>99.94% snapshot</td></tr>
              <tr><th>Systems</th><td>Rarity, crafting, raids, bosses</td></tr>
              <tr><th>Website</th><td><a href="https://bravora.exordion.com.br/" target="_blank" rel="nofollow noopener noreferrer">Bravora</a></td></tr>
              <tr><th>Wiki</th><td><a href="https://exordion.gitbook.io/exordion-wiki" target="_blank" rel="nofollow noopener noreferrer">Official wiki</a></td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Confirm the current world, rules, client, and announcements on the official Bravora website.</p><a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">Open client download</a></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Exordion with other Open Tibia worlds by live status, protocol, location, and community signals.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}
