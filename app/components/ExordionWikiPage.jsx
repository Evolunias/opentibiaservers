import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview'],
  ['at-a-glance', 'At a glance'],
  ['worlds', 'Worlds and history'],
  ['start', 'How to start'],
  ['progression', 'Progression'],
  ['systems', 'Core systems'],
  ['endgame', 'Raids and endgame'],
  ['areas', 'World and hunting areas'],
  ['client', 'Client and tools'],
  ['community', 'Community'],
  ['external-links', 'External links'],
];

const systems = [
  {
    title: 'Rarity system',
    label: 'Items',
    body: 'Equipment rarity, Item Power, fragments, Special Orbs, and the Orb Machine add a second progression layer to familiar 7.4 equipment.',
  },
  {
    title: 'Crafting',
    label: 'Items',
    body: 'The official wiki has a dedicated Crafting page. Recipes, materials, stations, and success rules should be checked there before committing resources.',
  },
  {
    title: 'Elite monsters',
    label: 'Hunting',
    body: 'Elite versions use Green Skull, Red Skull, and Black Skull tiers with exclusive drops documented through the official update record.',
  },
  {
    title: 'Bestiary',
    label: 'Hunting',
    body: 'The Bestiary and Hunting Guide are linked as first-party references for creature discovery, hunt planning, and the wider monster catalogue.',
  },
  {
    title: 'Tasks',
    label: 'Progression',
    body: 'Task slots, task scrolls, rewards, and group task progression give party play a structured objective beyond ordinary hunting.',
  },
  {
    title: 'Dungeons',
    label: 'Progression',
    body: 'Dungeon summons scale with the selected dungeon level or difficulty. Rookgaard also has a documented level 65 dungeon.',
  },
  {
    title: 'Daily rewards',
    label: 'Routine',
    body: 'Daily Reward, Bonus Exp, Safe Zone, Stamina, and Blessings are all exposed as gameplay or system pages in the official wiki navigation.',
  },
  {
    title: 'Casino Island',
    label: 'Social',
    body: 'Casino Games and Casino Island are named parts of the project, giving characters an activity hub outside the normal hunt-and-level loop.',
  },
];

const raidRows = [
  ['Raid Cooldown', 'Each raid tracks its own cooldown after execution; the client module exposes availability, requirements, city, location, and filters.'],
  ['Boss Raids', 'Starting and Alive states are displayed, with level requirements for skull tiers. A boss cooldown begins after the boss dies.'],
  ['Rookgaard rotation', 'Named entries include Young Yeti, The Broodmother, and Zhaumor, alongside creature raids such as Spiders, Dwarves, Cyclops, Orc Land, and Wyverns.'],
  ['Daily Boss 200+', 'The Black Mire is located in Dawncrest and is described as a higher-level daily challenge with exclusive rewards.'],
  ['Sacrifice', 'The Sacrifice System uses Exordion Coins to initiate or affect raids. Historical notes mention a standard 30-minute cooldown; event values are temporary.'],
  ['Ghazbaran', 'Ghazbaran enters the Sacrifice boss rotation once the server top level reaches 500. This is a progression gate, not a base-rate claim.'],
];

const areaRows = [
  ['Rookgaard', 'Dark Cathedral, Cyclops island, Orc castle, Wyvern respawn, Dwarven Mines, Iron Camp, Sandshins, and Falcon island/Bastion.'],
  ['Mainland', 'Edron, Stonehome, Dawncrest, Ankrahmun, Carlin, and Thais, with custom hunts and raid content layered over the global map.'],
  ['Insectoids Island', 'Reached through Captain Marlow east of Edron in Stonehome. The update names Insectoid Worker, Waspoid, Crawler, Spidris, and Kollos.'],
  ['Dark Cathedral', 'A redesigned Rookgaard hunting area with Dark Monks, Assassins, Ghouls, Beholders, Zombies, Vampires, Necromancers, and Heroes.'],
  ['Falcon content', 'Falcon Squire, Falcon Knight, and Falcon Paladin are named in the update record, with Falcon Medal and Bastion Backpack among referenced rewards.'],
  ['Dawncrest', 'The setting for The Black Mire, the documented Daily Boss 200+ encounter.'],
];

const clientRows = [
  ['Enhanced Client', 'The project advertises an Enhanced Client built around a classic 7.4 foundation and modern quality-of-life features.'],
  ['New Launcher', 'The newer launcher surfaces news and online streamers, links social channels, can close while the game continues, and is required for some later updates.'],
  ['Raid module', 'Browse raids by Rookgaard/Mainland and normal/boss type, see minimum levels and cooldowns, and center the minimap on a raid location.'],
  ['Hunting Guide', 'An in-game guide and updated minimap help players discover the expanded map and identify activity beyond the original client experience.'],
  ['Combat feedback', 'Server Log damage/healing messages and animated colored healing and mana text are called out in the update history.'],
  ['Autoloot and trainer', 'Auto Loot, Trainer, Practice Scrolls, Loot Seller, and Autoloot Money to Bank appear in the official system and store navigation.'],
];

const timeline = [
  ['24 Aug 2024', 'Legacy begins', 'The official world selector identifies Legacy as the earliest of the three named worlds.'],
  ['11 Aug 2025', 'Aegis begins', 'Aegis is presented as a later competitive era and a separate progression cycle in the shared Exordion universe.'],
  ['11 Mar 2026', 'Bravora opens', 'The launch countdown and launch-day ticker place Bravora at 17:00 BRT / 21:00 CET.'],
  ['Jun–Aug 2026', 'Systems expand', 'Official changelog titles cover new hunts, Falcons, Insectoids Island, Elite Drops, Golden Elites, raids, and launcher updates.'],
];

const socialLinks = [
  ['Discord', 'https://discord.gg/K9RF9pCfvC'],
  ['WhatsApp', 'https://chat.whatsapp.com/DFzXDDqaOe2GGKmzKsKnig'],
  ['Instagram', 'https://instagram.com/exordion7.4/'],
  ['YouTube', 'https://youtube.com/@Exordion'],
  ['TikTok', 'https://tiktok.com/@exordion'],
  ['Roadmap', 'https://trello.com/b/lxIq3Jyc/exordion-roadmap'],
];

export default function ExordionWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="exordion">
      <section className="cyntara-wiki__hero border-b border-black bg-white text-black">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-start">
          <div className="cyntara-wiki__header mb-0 pb-7">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              <a href="/" className="font-semibold text-black">Open Tibia Servers</a>
              <span>/</span>
              <span>Server wiki</span>
              <span>/</span>
              <span>Exordion</span>
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gray-600">OpenTibiaServers Wiki · Bravora field guide</p>
            <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-black md:text-6xl">Exordion: server status, how to play, and community</h1>
            <p className="mb-4 max-w-3xl text-lg leading-8 text-black">A detailed reference for Exordion’s Bravora world: its 7.4 identity, custom systems, named areas, raids, client tools, community links, and the facts players should verify before they begin.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://bravora.exordion.com.br/" target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-black bg-black px-5 py-3 text-sm font-bold text-white hover:bg-gray-800 hover:no-underline">Visit Bravora</a>
              <a href="https://exordion.gitbook.io/exordion-wiki" target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-100 hover:no-underline">Open official wiki</a>
              <a href="/?search=Exordion" className="rounded border border-black bg-white px-5 py-3 text-sm font-bold text-black hover:bg-gray-100 hover:no-underline">Compare listings</a>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="cyntara-wiki__infobox">
              <ServerLogo server={{ name: 'Exordion', slug: 'exordion', host: 'bravora.exordion.com.br' }} size="profile" />
              <div className="cyntara-wiki__infobox-header">Exordion · Bravora</div>
              <table><tbody>
                <tr><th>Status</th><td><span className="status-dot status-dot--online mr-2 inline-block" />Active snapshot</td></tr>
                <tr><th>Host</th><td><code>bravora.exordion.com.br:7171</code></td></tr>
                <tr><th>Protocol</th><td>Exordion / Tibia 7.4</td></tr>
                <tr><th>Players</th><td>383 (3,129 unique IPs) / 2,000</td></tr>
                <tr><th>Uptime</th><td>99.94%</td></tr>
                <tr><th>EXP / PvP</th><td>x1 / PVP listing</td></tr>
                <tr><th>Country signal</th><td>USA directory signal; Brazilian project</td></tr>
                <tr><th>Launch</th><td>11 March 2026</td></tr>
                <tr><th>Updated</th><td>26 July 2026</td></tr>
              </tbody></table>
            </div>
            <div className="cyntara-wiki__callout m-0">
              <strong>Quick reading</strong>
              <p>Think “classic 7.4 skeleton, modern service layer.” Bravora keeps the old-school reference point while adding custom map content, rarity, crafting, raids, dungeons, and client tools.</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="cyntara-wiki__grid mx-auto max-w-6xl px-6 py-8">
        <article className="cyntara-wiki__content">
          <p><strong>Exordion</strong> is a custom Open Tibia project organized around the Bravora, Aegis, and Legacy worlds. Its current public identity is a custom 7.4 experience: global-map familiarity, new areas and monsters, persistent characters, and a layer of systems designed to make a long-running world more active.</p>
          <p>The most useful distinction is between <em>standing systems</em> and <em>dated announcements</em>. Rarity, crafting, bestiary, task, raid, dungeon, and client pages describe the shape of the game; a double boost, festival, or temporary cooldown change describes a moment in its calendar.</p>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview</SectionHeading>
            <p>Exordion’s stated goal is to preserve the feel of classic Tibia while removing some of the friction players associate with a historical client. The official description names exclusive systems, new areas, new monsters, anti-bot protection, a global proxy, low-ping access, an Enhanced Client, and a no-reset philosophy.</p>
            <p>Bravora is the current chapter of that project. The official launch trail places its opening on 11 March 2026 at 17:00 BRT / 21:00 CET. The project’s older community launch material uses an 8.0 label; this page records that as historical context rather than silently merging it with the current 7.4 profile.</p>
            <div className="cyntara-wiki__callout">
              <strong>What is confirmed, and what is not</strong>
              <p>The official pages clearly confirm the project identity, named worlds, client/wiki ecosystem, launch trail, custom content, and many systems. A complete permanent rate table, full PvP ruleset, detailed vocation balance, and full item/quest catalogue are not exposed in the reviewed source material.</p>
            </div>
          </section>

          <section id="at-a-glance">
            <SectionHeading>At a glance</SectionHeading>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Profile value</th><th>How to read it</th></tr></thead><tbody>
                <tr><th>Category</th><td>Old-school custom Open Tibia</td><td>7.4 is the current Bravora identity; the map and systems are not a pure historical replica.</td></tr>
                <tr><th>Connection</th><td><code>bravora.exordion.com.br:7171</code></td><td>Directory snapshot for the Bravora world. Confirm the active client and host on the official site.</td></tr>
                <tr><th>Activity</th><td>383 / 2,000; 3,129 unique IPs</td><td>Time-sensitive directory snapshot captured 26 July 2026, not a guaranteed live count.</td></tr>
                <tr><th>Uptime</th><td>99.94%</td><td>Directory monitor signal; it measures availability, not game quality or community fit.</td></tr>
                <tr><th>Rates</th><td>x1 EXP listing</td><td>The public list says x1, while official pages also mention staged experience and event boosts. Verify the permanent table.</td></tr>
                <tr><th>PvP</th><td>PVP listing signal</td><td>The exact skull, protection, war, and unjustified-kill rules require the current official rules page.</td></tr>
                <tr><th>Map</th><td>Global + custom</td><td>Familiar cities are joined by new areas, hunts, islands, dungeons, and raid locations.</td></tr>
                <tr><th>Reset policy</th><td>No reset advertised</td><td>A project claim about persistence; it does not mean every world shares the same progression cycle.</td></tr>
              </tbody></table>
            </div>
          </section>

          <section id="worlds">
            <SectionHeading>Worlds and history</SectionHeading>
            <p>Exordion’s world selector presents three chapters rather than three unrelated servers. Legacy is the established record, Aegis is described as a newer competitive era, and Bravora is the current/new chapter. Exact population and world-specific rate differences should be read from each official world page.</p>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table"><thead><tr><th>World</th><th>Public history</th><th>Profile in the Exordion network</th></tr></thead><tbody>
                <tr><th>Bravora</th><td>11 March 2026 · 17:00 BRT / 21:00 CET</td><td>Current 7.4 world with the most visible new-area, raid, elite, and launcher updates.</td></tr>
                <tr><th>Aegis</th><td>11 August 2025</td><td>Presented by the official site as a competitive era and a separate progression cycle.</td></tr>
                <tr><th>Legacy</th><td>24 August 2024</td><td>The earliest named world in the current selector; positioned as a living record of player journeys.</td></tr>
              </tbody></table>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {timeline.map(([date, title, body]) => <div key={date} className="border-l-4 border-gray-300 bg-gray-50 p-4"><p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">{date}</p><h3 className="mb-1 text-base font-bold text-black">{title}</h3><p className="mb-0 text-sm leading-7 text-gray-700">{body}</p></div>)}
            </div>
          </section>

          <section id="start">
            <SectionHeading>How to start playing</SectionHeading>
            <p>The safest onboarding path is intentionally straightforward. Use the official world page and wiki for the current client, then use the directory only as an independent activity check.</p>
            <ol>
              <li><strong>Choose the world.</strong> Start with Bravora if you want the current 7.4 chapter; compare Aegis and Legacy if an older progression cycle better fits your group.</li>
              <li><strong>Read the current rules.</strong> PvP type, automation, multi-clienting, account sharing, naming, punishments, and store policy are not fully reproduced here.</li>
              <li><strong>Download from the official page.</strong> Use the Bravora <a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">client download</a> or the launcher link shown by the current site, never an unverified mirror.</li>
              <li><strong>Open the official wiki.</strong> Check Spells, Runes, Spirit, Training, Blessings, Stamina, Tasks, Dungeons, and the client guides before spending currency or rare materials.</li>
              <li><strong>Join the community.</strong> Discord is the best place to confirm launch notices, maintenance, temporary boosts, and questions that the static wiki cannot answer.</li>
              <li><strong>Re-check dated events.</strong> Global boosts, festivals, party multipliers, Golden Elites, and cooldown changes are event records, not permanent rates.</li>
            </ol>
          </section>

          <section id="progression">
            <SectionHeading>Progression and character building</SectionHeading>
            <p>Bravora’s progression is not only “level until the next hunt.” The source trail describes several overlapping loops: character levels and tasks, party bonuses, item power and rarity, crafting materials, dungeon difficulty, bestiary discovery, and repeatable boss/raid activity.</p>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table"><thead><tr><th>Loop</th><th>What the sources show</th><th>Player question to verify</th></tr></thead><tbody>
                <tr><th>Levels and rates</th><td>x1 EXP is the directory signal; owner material also mentions staged experience.</td><td>What are the permanent stages, skill/magic/loot rates, and stamina rules?</td></tr>
                <tr><th>Tasks</th><td>Tasks, additional task slots, task scrolls, and task rewards are named. Party members can receive 0.5 task credit in the cited event context.</td><td>Which NPCs, limits, points, rewards, and solo/group rules apply now?</td></tr>
                <tr><th>Parties</th><td>Temporary Party x3 and Party x4 bonuses were documented at 80% and 120% in a ten-day event.</td><td>What is the normal shared-experience range and which bonuses are live?</td></tr>
                <tr><th>Equipment</th><td>Rarity, Item Power, fragments, Orbs, upgrades, and crafting extend the equipment hunt.</td><td>Which rarity tiers, recipes, costs, and upgrade outcomes are active?</td></tr>
                <tr><th>Endgame</th><td>Elite monsters, boss raids, Daily Boss 120/200+, dungeons, Sacrifice, and bestiary systems create repeatable goals.</td><td>What level, party size, cooldown, and reward requirements apply to each encounter?</td></tr>
              </tbody></table>
            </div>
            <p>Vocation names and balance details are not exposed in the reviewed wiki navigation. Players should use the official Spells and Informations pages rather than assuming that classic 7.4 formulas remain unchanged.</p>
          </section>

          <section id="systems">
            <SectionHeading>Core systems</SectionHeading>
            <p>The official wiki navigation is unusually useful as a systems index even when its landing pages are not reproduced here. These are the systems most likely to change how a new character plans time, loot, and equipment.</p>
            <div className="grid gap-4 md:grid-cols-2">{systems.map((system) => <div key={system.title} className="border border-gray-300 bg-white p-4"><div className="mb-2 flex items-center justify-between gap-3"><h3 className="text-base font-bold text-black">{system.title}</h3><span className="text-[0.68rem] font-bold uppercase tracking-widest text-gray-500">{system.label}</span></div><p className="mb-0 text-sm leading-7 text-gray-700">{system.body}</p></div>)}</div>
            <div className="cyntara-wiki__callout mt-6">
              <strong>Rarity is not just a loot adjective</strong>
              <p>Exordion’s update history connects rarity to Item Power, Elite Drops, Special Orbs, fragments, and the Rarity Market. Treat rare equipment as part of an economy and crafting loop, not as a simple replacement for a Tibia 7.4 item.</p>
            </div>
          </section>

          <section id="endgame">
            <SectionHeading>Raids, bosses, and endgame</SectionHeading>
            <p>Raids are one of the clearest examples of Exordion’s modern layer. The official changelog describes a dedicated client module, location filters, level requirements, availability states, and cooldown tracking instead of a single static boss schedule.</p>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table"><thead><tr><th>Content</th><th>Documented behavior</th></tr></thead><tbody>{raidRows.map(([name, body]) => <tr key={name}><th>{name}</th><td>{body}</td></tr>)}</tbody></table>
            </div>
            <h3 className="mt-6 text-lg font-bold text-black">Elite tiers and named drops</h3>
            <p>Elite Drops are attached to selected monsters in their Elite versions. The update record names Green, Red, and Black Skull categories. Examples range from Demon Legs and Falcon Medal at Green to items such as Bone Fiddle, Dragon Scale Helmet, Nightmare Shield, Amazon Armor, Beholder Spellbook, and Native Armor across higher tiers.</p>
            <p>Golden Elites are described as an event-specific tier between Red and Black Skull: harder, aggressive, without traditional loot, and able to drop Special Orb fragments. Their availability and Item Power rules belong to the dated event record.</p>
            <div className="cyntara-wiki__callout">
              <strong>Plan around cooldowns, not rumors</strong>
              <p>The raid system explicitly aims to distribute boss access and stabilize the item economy. Check the client module or current official news for a raid’s state, minimum level, city, and cooldown before assembling a group.</p>
            </div>
          </section>

          <section id="areas">
            <SectionHeading>World and hunting areas</SectionHeading>
            <p>The world is advertised as global plus custom. That means classic geography remains useful for orientation, but the hunt catalogue is not limited to historical 7.4 spawns.</p>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table"><thead><tr><th>Area or region</th><th>Named content in the public update trail</th></tr></thead><tbody>{areaRows.map(([name, body]) => <tr key={name}><th>{name}</th><td>{body}</td></tr>)}</tbody></table>
            </div>
            <p>For a new character, the official Hunting Guide, Bestiary, and updated Minimap are more reliable than a copied spawn list. They can reflect changes that a static directory page cannot.</p>
          </section>

          <section id="client">
            <SectionHeading>Client, launcher, and quality of life</SectionHeading>
            <p>Exordion’s service layer is deliberately visible. The project positions the client and launcher as part of the game rather than a thin login wrapper, with tools for discovering hunts, reading raids, and reducing routine friction.</p>
            <div className="cyntara-wiki__table-wrap">
              <table className="cyntara-wiki__table"><thead><tr><th>Tool or feature</th><th>Publicly documented purpose</th></tr></thead><tbody>{clientRows.map(([name, body]) => <tr key={name}><th>{name}</th><td>{body}</td></tr>)}</tbody></table>
            </div>
            <p>Anti-bot protection and a global proxy are official claims, but the reviewed pages do not specify detection behavior, supported operating systems, proxy locations, or an exhaustive prohibited-software policy. Those details belong to the current rules and launcher release notes.</p>
          </section>

          <section id="community">
            <SectionHeading>Community and official services</SectionHeading>
            <p>Beyond chat channels, the official site exposes a wide set of community-facing services: Characters, Who Is Online, Highscores, Kill Statistics, Latest Deaths, Player Bans, Houses, Guilds, Live Casting, and Streamers. These pages make the world legible before a player logs in and provide a useful activity check alongside the directory snapshot.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-gray-300 bg-gray-50 p-4"><h3 className="mb-2 text-base font-bold text-black">Account and economy</h3><p className="mb-0 text-sm leading-7 text-gray-700">The site navigation includes account recovery, Edit Character, Store, Donate Points, Character Bazaar, Houses, and store history. Exact prices, refunds, trade restrictions, and payment policy should be read on the live service.</p></div>
              <div className="border border-gray-300 bg-gray-50 p-4"><h3 className="mb-2 text-base font-bold text-black">Community signals</h3><p className="mb-0 text-sm leading-7 text-gray-700">Discord, WhatsApp, Instagram, YouTube, TikTok, the roadmap, live casts, and streamers are all linked by the official project. Activity is a useful signal, but never a substitute for the current rules or client download.</p></div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">{socialLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-500 hover:no-underline">{label}</a>)}</div>
          </section>

          <section id="external-links">
            <SectionHeading>External links</SectionHeading>
            <ul>
              <li><a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">Bravora client download</a></li>
              <li><a href="https://bravora.exordion.com.br/?rules" target="_blank" rel="nofollow noopener noreferrer">Bravora rules</a></li>
              <li><a href="https://exordion.gitbook.io/exordion-wiki" target="_blank" rel="nofollow noopener noreferrer">Exordion official player wiki</a></li>
              <li><a href="https://discord.gg/K9RF9pCfvC" target="_blank" rel="nofollow noopener noreferrer">Exordion Discord</a></li>
              <li><a href="https://trello.com/b/lxIq3Jyc/exordion-roadmap" target="_blank" rel="nofollow noopener noreferrer">Exordion roadmap</a></li>
              <li><a href="/">Open Tibia Servers directory</a></li>
              <li><a href="/?search=7.4" >Compare 7.4 servers</a></li>
            </ul>
            <div className="cyntara-wiki__recommended">
              <h3>Explore Exordion</h3>
              <p>Use the official wiki for the latest rules, recipes, quest details, and system changes.</p>
              <a className="cyntara-wiki__button" href="https://exordion.gitbook.io/exordion-wiki" target="_blank" rel="nofollow noopener noreferrer">Open official wiki</a>
            </div>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Wiki index</div>
            <p className="text-sm">Exordion 7.4 · Bravora</p>
            <ol className="m-0 pl-5 text-sm">{contents.slice(0, 9).map(([id, label]) => <li key={id} className="my-1"><a href={`#${id}`}>{label}</a></li>)}</ol>
          </div>
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Player checklist</div>
            <ul className="m-0 pl-5 text-sm"><li>Confirm world and host</li><li>Read current rules</li><li>Download the official client</li><li>Check permanent rates</li><li>Join the Discord</li><li>Verify dated events</li></ul>
          </div>
          <div className="cyntara-wiki__callout">
            <strong>Official start path</strong>
            <p>Bravora’s site is the source of truth for account creation, rules, news, and the current client.</p>
            <a href="https://bravora.exordion.com.br/" target="_blank" rel="nofollow noopener noreferrer">Open Bravora site</a>
          </div>
          <div className="cyntara-wiki__recommended">
            <h3>Directory context</h3>
            <p>The activity snapshot is useful for comparison, while the official wiki explains how the world actually plays.</p>
            <a className="cyntara-wiki__button" href="/?search=Exordion">Browse related listings</a>
          </div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}
