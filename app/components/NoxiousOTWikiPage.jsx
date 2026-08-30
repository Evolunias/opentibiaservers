import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & server identity'],
  ['facts', 'Reference facts'],
  ['rates', 'Rates & progression'],
  ['content', 'Map, quests & custom content'],
  ['pvp', 'PvP, events & guild wars'],
  ['economy', 'Items, market & casino systems'],
  ['clients', 'Clients, Android & downloads'],
  ['rules', 'Rules, support & trust'],
  ['activity', 'Activity & history'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const referenceRows = [
  ['Server name', 'NoxiousOT', 'The name used by the official site, staff wiki, and public directory record.'],
  ['Connection', 'noxiousot.com:7171', 'The published server address. Confirm the current endpoint through the official site before connecting.'],
  ['Client / protocol', 'Tibia 8.60', 'Official server information and directory records identify the 8.60 client family.'],
  ['Listed profile', 'NOX RLMAP 8.6 · x10 · PVP', 'A public directory snapshot, useful for discovery but not a permanent service guarantee.'],
  ['Players snapshot', '324 (1,038 unique IPs) / 2,000', 'Captured listing activity; counts change continuously and should be refreshed before joining.'],
  ['Uptime snapshot', '99.85%', 'Captured public-directory uptime signal, not an independent availability SLA.'],
  ['Region signal', 'USA', 'The directory and official profile associate the service with USA hosting.'],
];

const rateRows = [
  ['Experience', 'Stages from 50× at levels 1–20 to 0.5× at levels 326–350', 'A staged curve starts quickly and becomes deliberately slower at higher levels.'],
  ['Magic level', '6×', 'Official Server Info value.'],
  ['Skills', '12×', 'Official Server Info value.'],
  ['Loot', '2×', 'Official Server Info value.'],
  ['Level ceiling context', 'Official statistics report a highest level of 458', 'A historical statistic, not necessarily a current cap or progression promise.'],
];

const featureRows = [
  ['Real-map foundation', 'An 8.60 real-map profile is paired with custom areas and systems.'],
  ['Custom hunting islands', 'Ten custom hunting islands add destinations beyond the standard map.'],
  ['Quests and tasks', 'The official wiki documents quest guides, task NPCs, hunting places, and custom content.'],
  ['Magic items', 'A Diablo-style randomized item layer can add stat bonuses to dropped equipment.'],
  ['Addons and outfits', 'Official references include addon bonuses, outfits, and retro outfit support.'],
  ['Live tools', 'A map viewer, monster-spawn search, latest news, and Discord/game integrations support research and onboarding.'],
];

const eventRows = [
  ['Team Deathmatch', 'Team competition with event rewards; current schedule and entry rules belong to the official rules page.'],
  ['Capture the Flag', 'Objective-based PvP event listed among NoxiousOT activities.'],
  ['King of the Hill', 'Control-point competition that gives the server an organized PvP loop beyond open-world conflict.'],
  ['Zombie Event', 'A named event in the official server feature set.'],
  ['Guild battles and wars', 'Guilds can compete in organized battles, including private-war style encounters.'],
  ['Boss arenas', 'Official news and feature material reference weekly boss-arena availability; verify the current schedule.'],
];

const economyRows = [
  ['Item Market', 'Players can buy and sell items, including magical items, through a dedicated market system.'],
  ['Currencies', 'The wiki references Noxious Tokens, Gold Nuggets, and Premium Points in market contexts.'],
  ['Bounty hunting', 'A bounty system adds a player-versus-player target and reward layer.'],
  ['Casino games', 'Black Jack, Beat The Dealer, and slots are named official gambling activities using Noxious Tokens.'],
  ['Magic-item economy', 'Randomized equipment creates a gear-hunting economy with variable stat value.'],
];

const externalLinks = [
  ['NoxiousOT official homepage', 'https://www.noxiousot.com/'],
  ['Official Server Info', 'https://www.noxiousot.com/index.php?subtopic=serverinfo'],
  ['Official rules', 'https://www.noxiousot.com/index.php?subtopic=rules'],
  ['Official downloads', 'https://www.noxiousot.com/index.php?subtopic=downloads'],
  ['Official custom client page', 'https://www.noxiousot.com/?subtopic=customclient'],
  ['Official Android client page', 'https://www.noxiousot.com/?subtopic=android'],
  ['Official legal and support page', 'https://www.noxiousot.com/?subtopic=legal'],
  ['NoxiousWiki', 'https://wiki.noxiousot.com/wiki/NoxiousWiki'],
  ['OTServList players-online ranking', 'https://otservlist.org/list-server_players_online-desc.html'],
  ['OpenTibiaServers directory', '/'],
];

export default function NoxiousOTWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="noxiousot">
      <header className="cyntara-wiki__header"><h1>NoxiousOT</h1><small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small></header>
      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>NoxiousOT</u></em></strong> is an 8.60 <strong>Open Tibia PvP server</strong> built around a real-map foundation, staged progression, custom hunting islands, randomized magic items, competitive events, and a staff-maintained wiki. Its public listing identifies <code>noxiousot.com:7171</code>, a USA region signal, x10 headline experience, and a 2,000-player capacity.</p>
              <p>This page combines official NoxiousOT pages with a dated public activity snapshot. Use the official website for current client downloads, account creation, rules, news, and support; use the <a href="https://wiki.noxiousot.com/wiki/NoxiousWiki" target="_blank" rel="nofollow noopener noreferrer">NoxiousWiki</a> for player-facing guides and system detail.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'NoxiousOT', slug: 'noxiousot', host: 'noxiousot.com' }} size="profile" /></div>
          </div>
          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview"><SectionHeading>Overview &amp; server identity</SectionHeading>
            <p>NoxiousOT occupies a middle ground between a familiar <strong>8.6 real-map server</strong> and a custom progression game. The official feature set keeps recognizable Tibia geography and combat expectations while adding ten hunting islands, unique quests, magic-item randomization, professions of discovery through the wiki, and recurring PvP activities.</p>
            <p>That combination gives the listing several search intents: players may be looking for a <em>NoxiousOT review</em>, current players online, an 8.60 client, a safe download, custom hunting places, server rules, or a competitive guild environment. A good first step is to distinguish stable identity claims from live data that can change between sessions.</p>
            <div className="cyntara-wiki__callout"><strong>Profile scope</strong><p>Official pages provide the strongest evidence for rates, rules, clients, tools, and feature names. The public player and uptime values below are snapshots, while schedules, balance, availability, and enforcement should be checked on the active operator pages.</p></div>
          </section>

          <section id="facts"><SectionHeading>Reference facts</SectionHeading><p>The compact listing row is useful for comparison, but it does not fully describe NoxiousOT’s systems or player experience.</p><Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} /></section>

          <section id="rates"><SectionHeading>Rates &amp; progression</SectionHeading>
            <p>The official <a href="https://www.noxiousot.com/index.php?subtopic=serverinfo" target="_blank" rel="nofollow noopener noreferrer">Server Info</a> page describes a staged experience curve rather than a flat x10 promise. Early characters move through the opening levels quickly, while high-level progression slows significantly. Magic, skills, and loot each use separate multipliers.</p>
            <Table headers={['Category', 'Published value', 'Player interpretation']} rows={rateRows} />
            <p>In practical terms, <strong><em>NoxiousOT rates</em></strong> support a faster start followed by a more sustained endgame. The x10 directory label should therefore be read together with the stage table, 6× magic, 12× skills, and 2× loot—not as a guarantee that every character reaches the top levels quickly.</p>
          </section>

          <section id="content"><SectionHeading>Map, quests &amp; custom content</SectionHeading>
            <p>NoxiousOT extends its 8.60 base with content intended to give returning players reasons to explore. The official site and NoxiousWiki reference custom hunting areas, quest guides, task NPCs, currencies, outfits, and a map viewer that can help players locate monsters and spawns.</p>
            <Table headers={['Content area', 'What the sources describe']} rows={featureRows} />
            <p>The ten custom islands and randomized <strong>Diablo-style magic items</strong> are especially important differentiators. Their presence suggests an exploration-and-loot loop beyond a basic real-map listing, but exact drop tables, item tiers, quest requirements, and monster statistics should be taken from the current wiki rather than guessed from the directory row.</p>
          </section>

          <section id="pvp"><SectionHeading>PvP, events &amp; guild wars</SectionHeading>
            <p>NoxiousOT is listed as <strong><em><u>PVP</u></em></strong>, and the official feature set adds organized activities for players who want structured competition. Team events can provide alternatives to open-world guild conflict, while guild battles create a more deliberate reason to recruit, coordinate, and control resources.</p>
            <Table headers={['Activity', 'Documented context']} rows={eventRows} />
            <div className="cyntara-wiki__callout"><strong>Read the current rules</strong><p>PvP classification alone does not explain frag limits, death penalties, multi-client restrictions, event participation, war conduct, or punishments. The official rules page is the authority before joining a guild or funding an account.</p></div>
          </section>

          <section id="economy"><SectionHeading>Items, market &amp; casino systems</SectionHeading>
            <p>Beyond ordinary NPC trading, NoxiousOT documents an economy built around a player Item Market, special currencies, bounties, and casino activities. Randomized magic items give equipment different potential values, making identification, demand, and price discovery part of the long-term game.</p>
            <Table headers={['System', 'Documented context']} rows={economyRows} />
            <p>Players should verify current market fees, currency sources, trade restrictions, and payment terms. The official rules and legal pages matter here because in-game items, accounts, and services should never be exchanged for unauthorized outside money or services.</p>
          </section>

          <section id="clients"><SectionHeading>Clients, Android &amp; downloads</SectionHeading>
            <p>The official site provides multiple client paths for the <strong>NoxiousOT 8.60 server</strong>. Its custom client advertises automatic connection, separate settings, new monsters, retro outfits, updated effects, a reskinned interface, multi-client support, and compatibility with selected third-party tools. An Android OTClientV8 option is also documented.</p>
            <ol>
              <li>Start at the official <a href="https://www.noxiousot.com/index.php?subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">Downloads page</a>, not a mirror or copied forum attachment.</li>
              <li>Choose between the official 8.60 client path and the current custom or Android client information published by NoxiousOT.</li>
              <li>Confirm checksums, release notes, account paths, and supported operating systems if the operator provides them.</li>
              <li>Review the rules before using any client feature in PvP, events, or multi-client situations.</li>
            </ol>
            <div className="cyntara-wiki__callout"><strong>Security baseline</strong><p>Never disable antivirus protections to install a client and never trust an unverified download mirror. If a current client differs from the documented path, confirm it through the official support channel first.</p></div>
          </section>

          <section id="rules"><SectionHeading>Rules, support &amp; trust</SectionHeading>
            <p>NoxiousOT publishes rules covering PvP abuse, event abuse, multiclienting in events, exploit reporting, griefing, illegal trading, powerleveling, frag abuse, advertising, chat conduct, houses, scams, and staff behavior. This breadth is a useful trust signal: players can evaluate not only features but also the boundaries around competitive play.</p>
            <p>The official legal page lists <a href="mailto:support@noxiousot.com">support@noxiousot.com</a> for questions or concerns. NoxiousWiki is described as staff-maintained and expands the public information layer with downloads, hunting grounds, quests, custom items, task NPCs, outfits, currencies, and FAQs.</p>
          </section>

          <section id="activity"><SectionHeading>Activity &amp; history</SectionHeading>
            <p>The captured directory snapshot records <strong>324 online players out of 2,000</strong>, 1,038 unique IPs, and 99.85% uptime, with x10 / PVP / 8.6 metadata. These figures are useful indicators of public visibility and historical activity, but they are not a live guarantee. Check the directory and official news at the moment you intend to play.</p>
            <p>Official statistics also describe a long-running ecosystem with large historical account and player totals, a recorded peak of 1,038 concurrent players, a highest reported level of 458, and 366 houses. Historical totals help explain the server’s scale; they should not be confused with today’s active population.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Snapshot activity" text="324 / 2,000 players and 1,038 unique IPs in the captured listing." /><FactCard label="Uptime signal" text="99.85% in the public directory snapshot." /><FactCard label="Server identity" text="USA signal · noxiousot.com:7171 · Tibia 8.60 · PVP." /></div>
          </section>

          <section id="sources"><SectionHeading>Sources &amp; verification</SectionHeading>
            <p>Primary research uses NoxiousOT’s official homepage, Server Info, rules, downloads, client pages, legal/support page, and staff wiki. OTServList is retained as a public activity reference. The page favors direct sources for feature claims and labels historical or directory data so readers can distinguish <em>current NoxiousOT status</em> from an archived snapshot.</p>
            <div className="grid gap-3 md:grid-cols-2"><SourceLink href="https://www.noxiousot.com/index.php?subtopic=serverinfo" label="Official Server Info" /><SourceLink href="https://www.noxiousot.com/index.php?subtopic=rules" label="Official Rules" /><SourceLink href="https://www.noxiousot.com/index.php?subtopic=downloads" label="Official Downloads" /><SourceLink href="https://wiki.noxiousot.com/wiki/NoxiousWiki" label="NoxiousWiki" /></div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current claims should come from operator-controlled pages, dated official news, or clearly labeled live directory observations. Do not turn copied descriptions, old screenshots, or third-party mirrors into verified NoxiousOT facts.</p></div>
          </section>

          <section className="cyntara-wiki__recommended" aria-label="Related server guides"><h3>Compare Open Tibia server styles</h3><p>Use the directory to compare NoxiousOT’s 8.60 PvP and custom-content profile with other documented worlds.</p><div className="flex flex-wrap gap-3"><a className="cyntara-wiki__button" href="/servers/demolidores">Demolidores guide</a><a className="cyntara-wiki__button" href="/servers/miracle74">Miracle74 guide</a><a className="cyntara-wiki__button" href="/servers/cyntara">Cyntara guide</a><a className="cyntara-wiki__button" href="/?search=8.6">Browse 8.6 servers</a></div></section>
          <section id="external-links"><SectionHeading>External links</SectionHeading><ul>{externalLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>

        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">NoxiousOT</div><ServerLogo server={{ name: 'NoxiousOT', slug: 'noxiousot', host: 'noxiousot.com' }} size="profile" /><table><tbody><tr><th>Category</th><td>Open Tibia PvP</td></tr><tr><th>Host</th><td><code>noxiousot.com:7171</code></td></tr><tr><th>Client</th><td>8.60</td></tr><tr><th>Headline rate</th><td>x10 staged EXP</td></tr><tr><th>Magic / skills</th><td>6× / 12×</td></tr><tr><th>Loot</th><td>2×</td></tr><tr><th>Players snapshot</th><td>324 / 2,000</td></tr><tr><th>Uptime snapshot</th><td>99.85%</td></tr><tr><th>Custom content</th><td>10 islands, quests, magic items</td></tr><tr><th>Clients</th><td>PC and Android options</td></tr><tr><th>Support</th><td>support@noxiousot.com</td></tr><tr><th>Website</th><td><a href="https://www.noxiousot.com/" target="_blank" rel="nofollow noopener noreferrer">noxiousot.com</a></td></tr></tbody></table></div><div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Use the official client and rules pages, then verify the current host and release information.</p><a href="https://www.noxiousot.com/index.php?subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">Open official downloads</a></div><div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare 8.60 servers by PvP type, rates, uptime, region, systems, and activity.</p><a className="cyntara-wiki__button" href="/?search=NoxiousOT">Browse similar servers</a></div></aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function FactCard({ label, text }) { return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>; }
function Table({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</span></ExternalLink>; }
