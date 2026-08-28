import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'At-a-glance facts'],
  ['worlds', 'Worlds & history'],
  ['start', 'How to start playing'],
  ['progression', 'Progression & vocations'],
  ['systems', 'Custom systems'],
  ['endgame', 'Raids, bosses & elites'],
  ['world', 'Map & hunting areas'],
  ['client', 'Client & quality of life'],
  ['rules', 'Rules & player safety'],
  ['community', 'Community & services'],
  ['ecosystem', 'The Open Tibia ecosystem'],
  ['external-links', 'External links'],
];

const systems = [
  ['Rarity System', 'Equipment can have rarity and Item Power layers beyond the base 7.4 item. Fragments, Special Orbs, the Orb Machine, and the Rarity Market are all named in the official system index.'],
  ['Crafting', 'Crafting is a dedicated official wiki topic. Use the live guide for recipes, materials, stations, and costs instead of assuming that classic item values apply.'],
  ['Elite Monsters', 'Selected creatures can appear as Elite versions with Green Skull, Red Skull, or Black Skull tiers and exclusive drop pools.'],
  ['Bestiary', 'The Bestiary and Hunting Guide provide a first-party route into creature discovery and hunt planning as the custom map expands.'],
  ['Tasks System', 'Tasks, extra task slots, task scrolls, and task rewards create goals beyond ordinary experience farming.'],
  ['Dungeons', 'Dungeon summons scale with the dungeon level or difficulty. A Rookgaard level 65 dungeon is specifically named in the update record.'],
  ['Sacrifice System', 'Sacrifice uses Exordion Coins to initiate or affect raid content. Cooldowns and event discounts should be checked against current announcements.'],
  ['Daily Reward & Bonus EXP', 'Daily Reward, Bonus Exp, Stamina, Safe Zone, Training, and Blessings are separate official wiki topics for routine progression and protection.'],
  ['Casino Island', 'Casino Games and Casino Island add a social activity space outside the usual hunt, task, and boss loops.'],
  ['Boss Reward System', 'A dedicated Boss Reward System is listed in the wiki, alongside Daily Bosses and Elite Raids, for repeatable endgame rewards.'],
];

const vocationRows = [
  ['Knight', 'Classic frontline vocation', 'Confirm current spells, weapon scaling, defensive formulas, and whether any custom balance applies.'],
  ['Paladin', 'Classic ranged vocation', 'Confirm ammunition, distance scaling, healing, and any custom progression rules.'],
  ['Sorcerer', 'Classic offensive magic vocation', 'Confirm spell list, Spirit interaction, magic-level pacing, and custom damage changes.'],
  ['Druid', 'Classic support and elemental vocation', 'Confirm healing, ice magic, Spirit interaction, and party utility.'],
];

const raidRows = [
  ['Raid Cooldown', 'The client module tracks individual raid cooldowns and exposes available raids, minimum levels, cities, locations, and filters.'],
  ['Boss Raid states', 'Boss encounters can show Starting or Alive states. The boss cooldown begins after the boss is killed, not simply when the raid begins.'],
  ['Rookgaard bosses', 'Young Yeti, The Broodmother, and Zhaumor are named Boss Raid entries in the public update trail.'],
  ['Rookgaard raids', 'Named creature or area rotations include Spiders, Snakes, Larvas, Chakoyas, Cathedral Bandits, Dwarves, Cyclops, Orc Land, and Wyverns.'],
  ['Daily Boss 200+', 'The Black Mire is located in Dawncrest and is described as a higher-level daily challenge with exclusive rewards.'],
  ['Sacrifice rotation', 'Ghazbaran enters the Sacrifice boss rotation when the server top level reaches 500.'],
];

const areaRows = [
  ['Rookgaard', 'Dark Cathedral, Cyclops island, Orc castle, Wyvern respawn, Dwarven Mines, Iron Camp, Sandshins, and Falcon island/Bastion.'],
  ['Mainland', 'Edron, Stonehome, Dawncrest, Ankrahmun, Carlin, and Thais, with custom hunts, dungeons, and raid locations layered onto the global map.'],
  ['Insectoids Island', 'Captain Marlow provides access east of Edron in Stonehome. Named creatures include Insectoid Worker, Waspoid, Crawler, Spidris, and Kollos.'],
  ['Dark Cathedral', 'The redesigned Rookgaard floors include Dark Monks, Assassins, Ghouls, Beholders, Zombies, Vampires, Necromancers, and Heroes.'],
  ['Falcon content', 'Falcon Squire, Falcon Knight, and Falcon Paladin are named alongside the Falcon Medal and Bastion Backpack.'],
  ['Dawncrest', 'The Black Mire Daily Boss 200+ encounter is associated with this area.'],
];

const clientRows = [
  ['Enhanced Client', 'A modern client layer built around the project’s classic 7.4 identity.'],
  ['New Launcher', 'Shows current news and online streamers, links social channels, can close while the game continues, and is required for some later updates.'],
  ['Raid module', 'Filters raids by Rookgaard/Mainland and normal/boss type, then displays requirements, cooldowns, cities, and minimap locations.'],
  ['Hunting Guide', 'Helps players discover hunts and navigate the expanded world alongside an updated Minimap.'],
  ['Auto Loot', 'Auto Loot, Loot Seller, Autoloot Money to Bank, and extra bag slots appear in the official client or store navigation.'],
  ['Trainer & Practice Scrolls', 'Training tools and 6-, 12-, and 24-hour Practice Scrolls are named in the current store-cost update.'],
  ['Combat feedback', 'Server Log damage/healing messages plus animated colored healing and mana text are documented quality-of-life changes.'],
];

const timeline = [
  ['24 August 2024', 'Legacy opens', 'The official world selector presents Legacy as the earliest named Exordion world.'],
  ['11 August 2025', 'Aegis opens', 'Aegis is described as a newer competitive era and a separate progression cycle.'],
  ['11 March 2026', 'Bravora opens', 'The launch trail places the opening at 17:00 BRT / 21:00 CET.'],
  ['June–August 2026', 'Custom systems expand', 'Public update titles cover new hunts, Falcons, Insectoids Island, Elite Drops, Golden Elites, raids, and launcher improvements.'],
];

const externalLinks = [
  ['Bravora official website', 'https://bravora.exordion.com.br/'],
  ['Bravora client download', 'https://bravora.exordion.com.br/?downloadclient'],
  ['Bravora rules', 'https://bravora.exordion.com.br/?rules'],
  ['Exordion official wiki', 'https://exordion.gitbook.io/exordion-wiki'],
  ['Exordion Discord', 'https://discord.gg/K9RF9pCfvC'],
  ['Exordion roadmap', 'https://trello.com/b/lxIq3Jyc/exordion-roadmap'],
];

export default function ExordionWikiPage() {
  return (
    <main className="cyntara-wiki" data-server-slug="exordion">
      <header className="cyntara-wiki__header">
        <h1>Exordion</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Exordion</strong> is a custom Open Tibia project focused on the old-school 7.4 experience while adding a modern client, custom map content, new monsters, structured raids, item rarity, crafting, bestiary progression, and quality-of-life systems. The current public profile centers on the Bravora world.</p>
              <p>Exordion is best understood as a classic foundation with a custom service layer. Familiar Tibia geography and four-vocation expectations are combined with dungeons, tasks, elite monsters, daily bosses, raid cooldowns, Sacrifice, a Rarity Market, and an official player wiki.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'Exordion', slug: 'exordion', host: 'bravora.exordion.com.br' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Server Identity</SectionHeading>
            <p>Exordion’s official positioning is “classic Tibia, improved for today.” The project advertises an Enhanced Client, anti-bot protection, a global proxy, low-ping access, frequent updates, a global plus custom map, and a no-reset philosophy. These claims describe the project’s direction; exact rules and technical behavior belong to the current client, website, and Discord.</p>
            <p>Bravora is the current 7.4 world presented by the official service. The public launch trail says it opened on 11 March 2026 at 17:00 BRT / 21:00 CET. Aegis and Legacy remain part of the wider Exordion world family, so players should choose a world rather than treating every historical announcement as a Bravora rule.</p>
            <div className="cyntara-wiki__callout"><strong>Classic base, custom depth</strong><p>Players looking for a strict 7.4 replica should expect more than the original ruleset here. Rarity, crafting, elite tiers, dungeons, boss rotations, and client modules are central parts of the current Exordion identity.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>At-a-glance facts</SectionHeading>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Exordion profile</th><th>Player context</th></tr></thead><tbody>
              <tr><th>World</th><td>Bravora</td><td>The current chapter and the world represented by the listed host below.</td></tr>
              <tr><th>Connection</th><td><code>bravora.exordion.com.br:7171</code></td><td>Confirm the current client and account path on the official world site.</td></tr>
              <tr><th>Protocol</th><td>Exordion / Tibia 7.4</td><td>Custom systems and map content mean this is not a pure historical replica.</td></tr>
              <tr><th>Players</th><td>383 (3129 unique IPs) / 2000</td><td>Directory snapshot; online counts change continuously.</td></tr>
              <tr><th>Uptime</th><td>99.94%</td><td>Monitor signal from the public listing, not a gameplay or community rating.</td></tr>
              <tr><th>EXP / PvP</th><td>x1 / PVP listing</td><td>Owner material also references staged experience. Read the current rules for exact PvP behavior.</td></tr>
              <tr><th>Location signal</th><td>USA listing / Brazilian project</td><td>The public directory and owner/community history use different location signals.</td></tr>
              <tr><th>Map and reset</th><td>Global + custom / no reset advertised</td><td>Classic cities are extended with new areas, hunts, dungeons, and raids.</td></tr>
            </tbody></table></div>
          </section>

          <section id="worlds">
            <SectionHeading>Worlds &amp; History</SectionHeading>
            <p>Exordion has a network identity rather than a single launch date. The official world selector describes Legacy, Aegis, and Bravora as different stages of the same universe. Population, active events, and world-specific progression can change, so use the official world page for the current choice.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>World</th><th>Public date</th><th>How it is positioned</th></tr></thead><tbody>
              <tr><th>Bravora</th><td>11 March 2026</td><td>Current 7.4 chapter with the most visible public updates for new areas, raids, elite creatures, and the launcher.</td></tr>
              <tr><th>Aegis</th><td>11 August 2025</td><td>A newer competitive era and separate progression cycle in the shared universe.</td></tr>
              <tr><th>Legacy</th><td>24 August 2024</td><td>The earliest named world, presented as a living record of player journeys.</td></tr>
            </tbody></table></div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">{timeline.map(([date, title, body]) => <div key={date} className="border-l-4 border-gray-300 bg-gray-50 p-4"><p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">{date}</p><h3 className="mb-1 text-base font-bold text-black">{title}</h3><p className="mb-0 text-sm leading-7 text-gray-700">{body}</p></div>)}</div>
          </section>

          <section id="start">
            <SectionHeading>How to Start Playing Exordion</SectionHeading>
            <p>A good first session is less about guessing the perfect build and more about using the correct official path. The client, rules, wiki, and community announcements can change faster than a directory listing.</p>
            <ol>
              <li><strong>Pick a world.</strong> Bravora is the current 7.4 chapter; compare Aegis and Legacy if your group is already established in another progression cycle.</li>
              <li><strong>Read the rules.</strong> The public listing says PVP, but skull behavior, protection, frags, wars, automation, multi-clienting, account sharing, and punishments require the current official rules.</li>
              <li><strong>Create an account and download safely.</strong> Use the official <a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">Bravora client download</a>, not an unverified mirror.</li>
              <li><strong>Learn the systems before spending.</strong> Read the official pages for Crafting, Rarity, Tasks, Dungeons, Daily Bosses, and the client tools before using rare items or Exordion Coins.</li>
              <li><strong>Start with a practical loop.</strong> Combine ordinary hunting with tasks, Bestiary discovery, daily rewards, and party play. Move into dungeons and raids once requirements are clear.</li>
              <li><strong>Check live news.</strong> Double boosts, party bonuses, Golden Elites, festivals, and cooldown changes are dated events, not permanent rates.</li>
            </ol>
          </section>

          <section id="progression">
            <SectionHeading>Progression &amp; Vocation Planning</SectionHeading>
            <p>Exordion keeps the classic four-vocation vocabulary, but the reviewed official wiki index does not publish a complete custom vocation balance table. That makes the official Spells, Spirit, Informations, Training, and Blessings pages the correct place to confirm formulas before planning a long-term character.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Vocation</th><th>Classic role</th><th>What to verify on Exordion</th></tr></thead><tbody>{vocationRows.map(([name, role, note]) => <tr key={name}><th>{name}</th><td>{role}</td><td>{note}</td></tr>)}</tbody></table></div>
            <p>Progression is broader than level gain. Tasks create objectives, party bonuses change group efficiency, Item Power and rarity affect loot decisions, crafting uses resources, and Bestiary or dungeon discovery can become a long-term route. Public update notes mention Party x3 and Party x4 event bonuses of 80% and 120%, but these were temporary and should not be read as base settings.</p>
            <div className="cyntara-wiki__callout"><strong>Rate terminology matters</strong><p>The directory snapshot displays x1 EXP, while older owner material mentions staged experience. No complete permanent experience, skill, magic, loot, spawn, or stamina table was available in the reviewed sources.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Custom Systems</SectionHeading>
            <p>The systems below are named by Exordion’s official website, player wiki, or update trail. Exact costs, item lists, cooldowns, and requirements belong to the live first-party pages.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
          </section>

          <section id="endgame">
            <SectionHeading>Raids, Bosses &amp; Elite Monsters</SectionHeading>
            <p>Endgame activity is organized around repeatable encounters rather than a single final quest. Raid cooldown tracking, level filters, boss states, elite drop tiers, and Sacrifice progression make scheduling and group composition important.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Content</th><th>Documented behavior</th></tr></thead><tbody>{raidRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <h3 className="mt-6 text-lg font-bold text-black">Elite drops and Golden Elites</h3>
            <p>Elite Drops are associated with selected Elite versions of creatures. Green, Red, and Black Skull categories are named in the update record. Referenced drops include Demon Legs, Falcon Medal, Bone Fiddle, Dragon Scale Helmet, Nightmare Shield, Amazon Armor, Beholder Spellbook, and Native Armor.</p>
            <p>Golden Elites are described as an event-specific tier between Red and Black Skull: more aggressive, harder to defeat, without traditional loot, and able to drop Special Orb fragments. Item Power thresholds and event availability should be checked in the dated announcement before forming a hunt.</p>
          </section>

          <section id="world">
            <SectionHeading>Map &amp; Hunting Areas</SectionHeading>
            <p>“Global + custom map” is one of the most useful descriptions of Exordion. Existing Tibia geography helps experienced players orient themselves, while new islands, hunts, dungeons, and raid locations provide reasons to explore beyond the original client map.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Area</th><th>Known public details</th></tr></thead><tbody>{areaRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <p>Use the official Hunting Guide, Bestiary, and Minimap for current spawn information. A static list can miss balance changes, new monsters, limited raids, and altered dungeon summons.</p>
          </section>

          <section id="client">
            <SectionHeading>Client &amp; Quality of Life</SectionHeading>
            <p>The client is part of the Exordion experience. Its tools are intended to preserve the look and pacing of a classic world while making discovery, combat feedback, and routine account management easier.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Feature</th><th>Player benefit</th></tr></thead><tbody>{clientRows.map(([name, description]) => <tr key={name}><th>{name}</th><td>{description}</td></tr>)}</tbody></table></div>
            <p>Anti-bot protection and a global proxy are official project claims. The reviewed public pages do not explain the detection model, proxy locations, supported operating systems, or every prohibited program, so those details should be taken from the latest rules and launcher notice.</p>
          </section>

          <section id="rules">
            <SectionHeading>Rules, PvP &amp; Player Safety</SectionHeading>
            <p>The directory classifies Bravora as PVP, but the exact combat rules are not reproduced in this reference. Before investing in a character, confirm the official rules for skulls, unjustified kills, protection zones, war declarations, death loss, multi-clienting, automation, account sharing, names, and appeals.</p>
            <ul>
              <li>Download the client only from the official Bravora website or its current launcher.</li>
              <li>Keep the launcher and client updated; later releases may require the new launcher.</li>
              <li>Do not treat a historical event multiplier or community comment as a permanent rule.</li>
              <li>Use the official Discord or wiki to resolve conflicting advice about tasks, items, raids, and store services.</li>
              <li>Check donation, Bazaar, refund, and account-recovery policies on the live service before making a purchase.</li>
            </ul>
          </section>

          <section id="community">
            <SectionHeading>Community &amp; Official Services</SectionHeading>
            <p>Exordion’s official website exposes more than a login form. Characters, Who Is Online, Highscores, Kill Statistics, Latest Deaths, Player Bans, Houses, Guilds, Live Casting, Streamers, Character Bazaar, Store, and account recovery all contribute to the public life of the world.</p>
            <div className="grid gap-4 md:grid-cols-2"><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Community channels</h3><p className="mt-2 text-sm leading-7 text-black">Discord, WhatsApp, Instagram, YouTube, and TikTok are linked by the project. Use those channels for launch notices, maintenance, event windows, and practical onboarding.</p><div className="mt-3 flex flex-wrap gap-2"><a href="https://discord.gg/K9RF9pCfvC" target="_blank" rel="nofollow noopener noreferrer">Discord</a><a href="https://chat.whatsapp.com/DFzXDDqaOe2GGKmzKsKnig" target="_blank" rel="nofollow noopener noreferrer">WhatsApp</a></div></div><div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">Account and economy</h3><p className="mt-2 text-sm leading-7 text-black">The Store, Donate Points, Character Bazaar, Houses, and store history make economy rules important. Verify prices, restrictions, and eligibility on the current official site.</p><div className="mt-3 flex flex-wrap gap-2"><a href="https://bravora.exordion.com.br/" target="_blank" rel="nofollow noopener noreferrer">Bravora website</a><a href="https://trello.com/b/lxIq3Jyc/exordion-roadmap" target="_blank" rel="nofollow noopener noreferrer">Roadmap</a></div></div></div>
          </section>

          <section id="ecosystem">
            <SectionHeading>The Open Tibia Ecosystem</SectionHeading>
            <p>Open Tibia covers a wide range of experiences, from strict low-rate replicas to heavily customized RPG worlds. Exordion sits between those poles: the 7.4 label matters, but the server’s defining choices are its persistent world, custom content, item systems, structured endgame, and modern client.</p>
            <div className="cyntara-wiki__callout"><strong>Looking for Private Servers?</strong><p>Explore <a href="/">opentibiaservers.com</a>, the leading open tibia server listing directory for real-time status tracking, player counts, version filters, and community rankings across active OTServ projects.</p></div>
            <div className="cyntara-wiki__recommended"><h3>Recommended Open Tibia Server</h3><p>For players seeking a polished Open Tibia experience with custom bosses, active community events, and modern client features, <strong>Evomanias</strong> is a recommended alternative.</p><a className="cyntara-wiki__button" href="https://evomanias.com/" target="_blank" rel="noopener noreferrer">Play Evomanias</a></div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{externalLinks.map(([label, href]) => <li key={href}><a href={href} target="_blank" rel="nofollow noopener noreferrer">{label}</a></li>)}</ul>
            <ul>
              <li><a href="/">OpenTibiaServers - Open Tibia Directory</a></li>
              <li><a href="https://evomanias.com/" target="_blank" rel="noopener noreferrer">Play Evomanias</a></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Exordion</div>
            <ServerLogo server={{ name: 'Exordion', slug: 'exordion', host: 'bravora.exordion.com.br' }} size="profile" />
            <table><tbody>
              <tr><th>World</th><td>Bravora</td></tr>
              <tr><th>Website</th><td><a href="https://bravora.exordion.com.br/" target="_blank" rel="nofollow noopener noreferrer">bravora.exordion.com.br</a></td></tr>
              <tr><th>Wiki</th><td><a href="https://exordion.gitbook.io/exordion-wiki" target="_blank" rel="nofollow noopener noreferrer">Official wiki</a></td></tr>
              <tr><th>Protocol</th><td>7.4 custom</td></tr>
              <tr><th>Map</th><td>Global + custom</td></tr>
              <tr><th>EXP / PvP</th><td>x1 / PVP listing</td></tr>
              <tr><th>Players</th><td>383 / 2000 snapshot</td></tr>
              <tr><th>Systems</th><td>Rarity, crafting, raids, dungeons</td></tr>
              <tr><th>Status</th><td>Verify current official status</td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Wiki index</div><ol className="m-0 pl-5 text-sm">{contents.slice(0, 10).map(([id, label]) => <li key={id} className="my-1"><a href={`#${id}`}>{label}</a></li>)}</ol></div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Confirm the world, rules, client, and current announcements on the official Bravora site.</p><a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">Open client download</a></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Exordion with other Open Tibia worlds by live status, protocol, location, and community signals.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}
