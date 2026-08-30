import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'Reference facts'],
  ['progression', 'Rates & progression'],
  ['mechanics', 'Classic mechanics'],
  ['systems', 'Custom systems & professions'],
  ['world', 'World, PvP & operations'],
  ['history', 'Launch history & community'],
  ['start', 'Client, safety & getting started'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const referenceRows = [
  ['Official name', 'Miracle 7.4', 'The name used by Miracle’s official website and Server Info pages.'],
  ['Connection record', 'go.miracle74.com:7171', 'Address preserved in the May 2024 launch announcement and the directory record. Confirm it on the official site immediately before connecting.'],
  ['Protocol', '7.4', 'The official positioning and launch announcement identify a 7.4-era server.'],
  ['World type', 'PvP', 'Listed in the official Server Info page. Detailed death, frag, and protection rules require a current rules source.'],
  ['Rates', '1× EXP, magic, skills, loot & spawn', 'Values stated by the official Server Info page.'],
  ['Host-location signal', 'USA', 'The official Server Info page lists a US host; the launch thread also uses a USA label.'],
  ['Official website', 'miracle74.com', 'Use the operator-controlled domain for account, client, and current announcement checks.'],
];

const mechanicRows = [
  ['Accurate formulas', 'The About Us page presents formula accuracy as part of the 7.4 recreation goal.'],
  ['Classic exhaustion', 'Described by the official About Us page as part of the old-school ruleset.'],
  ['No object hotkeys', 'An official mechanic claim; confirm current client behavior after updates.'],
  ['Runes', 'The official description says NPCs do not sell runes.'],
  ['Travel and protection zones', 'Old boat and protection-zone behavior are listed as classic-mechanics features.'],
  ['Combat and map interactions', 'Overspawn, UH traps, parcel elevation, and classic depot identity are named by the official About Us page.'],
];

const systemCards = [
  ['Attribution', 'An official Game Features system described as part of Miracle’s custom expansion.'],
  ['Relic Box', 'A named relic-oriented system listed by the official feature page.'],
  ['Bestiary & Charms', 'Official material identifies Bestiary and Charms as long-term character goals.'],
  ['Player Shop', 'A player-shop system is listed in the official Game Features material.'],
  ['Crafting', 'Crafting is part of the documented profession layer.'],
  ['Mining, Carpentry & Woodcutting', 'Three additional professions named in official feature material; exact recipes and advancement paths should be checked in game or in current official guides.'],
];

const externalLinks = [
  ['Miracle official homepage', 'https://www.miracle74.com/'],
  ['Miracle official Server Info', 'https://www.miracle74.com/?subtopic=serverinfo'],
  ['Miracle official About Us', 'https://miracle74.com/?subtopic=aboutus'],
  ['Miracle official Game Features', 'https://miracle74.com/?subtopic=gamefeatures'],
  ['Miracle official Downloads', 'https://miracle74.com/?Pv3LvL=WStBm&subtopic=downloads'],
  ['OTLand launch announcement: Miracle — Launch on May 28th', 'https://otland.net/threads/usa-7-4-miracle-launch-on-may-28th.289134/'],
  ['OTServList players-online ranking', 'https://otservlist.org/list-server_players_online-desc.html'],
  ['OpenTibiaServers directory', '/'],
];

export default function Miracle74WikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="miracle74">
      <header className="cyntara-wiki__header">
        <h1>Miracle 7.4</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>Miracle 7.4</u></em></strong> is a low-rate, PvP <strong>Open Tibia 7.4 server</strong> that presents itself as a long-term, hardcore slow-paced world. Official material combines a 1× progression profile and reconstructed classic mechanics with custom systems including Attribution, Relic Box, Bestiary, Charms, player shop, and professions.</p>
              <p>This reference separates operator-published features from historical and time-sensitive signals. The official site is the authority for the active client, account path, rules, maintenance notices, and live world status; the <a href="https://otland.net/threads/usa-7-4-miracle-launch-on-may-28th.289134/" target="_blank" rel="nofollow noopener noreferrer">May 2024 OTLand launch thread</a> preserves the public launch context, including a post by Jinwo, 302 replies, and roughly 53,000 recorded views.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Miracle 7.4', slug: 'miracle74', host: 'go.miracle74.com' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; identity</SectionHeading>
            <p>Miracle’s search intent is specific: players looking for <strong><em>Miracle74</em></strong> usually want a faithful 7.4-era pace, not a high-rate shortcut. The official About Us page frames the project around original CipSoft 7.4 files, real-map mechanics, and an expanded custom universe. The result is an old-school foundation with deliberate additions rather than a claim of an untouched replica.</p>
            <p>The 1× configuration matters because it affects how players evaluate a world: advancement, skill building, loot, spawn access, market supply, and group formation are intended to develop over time. That makes current rules, staff communication, and economy health more important than a single directory count.</p>
            <div className="cyntara-wiki__callout"><strong>Profile scope</strong><p>Official pages support the core identity, rate table, mechanics, and named systems summarized here. Exact vocation balance, quest routes, boss schedules, enforcement details, and current population are not inferred where a current source was not reviewed.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>These fields are tied to the official site or clearly attributed launch record. Directory presence and player counts should always be treated as snapshots rather than a promise of current availability.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="progression">
            <SectionHeading>Rates &amp; progression</SectionHeading>
            <p>According to official Server Info, <strong><em><u>Miracle 7.4 rates</u></em></strong> are 1× for experience, magic, skills, loot, and spawn. That broadly low-rate baseline makes the server a potential fit for players who prefer gradual character development and a long-lived economy over rapid resets or accelerated endgame access.</p>
            <p>Official material identifies Bestiary, Charms, relic systems, and professions as additional progression layers. It does not make every practical detail—such as level stages, skill thresholds, recipe sources, charm unlocks, or market policy—available in the reviewed sources. Consult the current official site and in-game documentation before planning a build or purchase.</p>
            <div className="grid gap-4 md:grid-cols-2"><FactCard label="Likely fit" text="Players seeking a deliberate 7.4 PvP world, classic interaction rules, and long-term goals beyond a fast experience multiplier." /><FactCard label="Confirm first" text="Current rate changes, vocation balance, death and frag rules, multi-client policy, bot policy, shop terms, and recent changelog entries." /></div>
          </section>

          <section id="mechanics">
            <SectionHeading>Classic 7.4 mechanics</SectionHeading>
            <p>The official About Us page describes a collection of mechanics intended to recreate the feel of <strong><em>classic Tibia 7.4</em></strong>. These are operator descriptions, so they are preserved as such rather than treated as an independent gameplay audit.</p>
            <Table headers={['Mechanic area', 'Officially described behavior']} rows={mechanicRows} />
            <div className="cyntara-wiki__callout"><strong>Why mechanics deserve verification</strong><p>Client and server updates can change practical behavior. Test the active client and read current announcements before relying on a historic mechanic for PvP, training, travel, or trading decisions.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Custom systems &amp; professions</SectionHeading>
            <p>Miracle does not position custom content as a replacement for its old-school base. Instead, official Game Features material presents systems that extend the long-term loop: equipment or collection goals, a player-facing market layer, and gathering or crafting professions.</p>
            <div className="grid gap-4 md:grid-cols-2">{systemCards.map(([title, text]) => <FactCard key={title} label={title} text={text} />)}</div>
            <p>These named systems are useful comparison points when evaluating Miracle against other <a href="/servers/demolidores">Open Tibia servers with real-map foundations</a> or a more heavily customized project such as <a href="/servers/cyntara">Cyntara</a>. They do not, by themselves, establish the current reward values, item tables, or endgame requirements.</p>
          </section>

          <section id="world">
            <SectionHeading>World, PvP &amp; operations</SectionHeading>
            <p>The official profile describes a PvP world hosted in the USA, with server save at <strong>05:00 GMT-3</strong> and a Monday map clean. It also describes a real-map foundation expanded with custom lore and content. The operating schedule is a helpful reference, but maintenance timing and world availability should be checked against current official notices.</p>
            <p>“PvP” is a broad classification, not a full ruleset. The reviewed material does not establish current unjustified-kill thresholds, skull settings, death-loss calculations, level protection, war rules, trade limits, or enforcement procedure. Players who prioritize competitive play should read the current rules before committing a character.</p>
          </section>

          <section id="history">
            <SectionHeading>Launch history &amp; community</SectionHeading>
            <p>Miracle’s public launch trail includes <strong>“[USA][7.4] Miracle - Launch on May 28th”</strong>, posted by Jinwo on May 26, 2024. The announcement describes an official release planned for May 28, 2024, and the archived thread shows 302 replies and approximately 53,000 views. Those figures describe the captured discussion record, not a current active-player count.</p>
            <p>Public launch threads are valuable because they preserve the project’s original positioning, community conversation, and dated announcements. They should be read alongside the operator’s live pages: a launch announcement cannot substitute for a current download link, security notice, rule page, or service-status statement.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="May 26, 2024" text="Public launch announcement posted by Jinwo." /><FactCard label="May 28, 2024" text="Official release date stated in the announcement." /><FactCard label="Thread snapshot" text="302 replies and about 53,000 views preserved in the launch record." /></div>
          </section>

          <section id="start">
            <SectionHeading>Client, safety &amp; getting started</SectionHeading>
            <p>The official Downloads page is the preferred source for the dedicated <strong>Miracle 7.4 client</strong>. Do not rely on mirrored installers, copied archives, or social-media attachments. A slow-paced server rewards taking a few minutes to verify the active endpoint and policy before starting.</p>
            <ol>
              <li>Open the <a href="https://www.miracle74.com/" target="_blank" rel="nofollow noopener noreferrer">official Miracle website</a> and confirm that account and download paths remain on an operator-controlled domain.</li>
              <li>Confirm the active host, port, supported client, release notes, and any checksum or launcher notice before installing.</li>
              <li>Read current rules for automation, multi-clienting, PvP, payments, account recovery, and trading.</li>
              <li>Compare live information with the official site and a public directory only immediately before joining; neither an old forum thread nor a ranking page guarantees service availability.</li>
            </ol>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; verification</SectionHeading>
            <p>The official homepage, Server Info, About Us, Game Features, and Downloads pages are primary sources for Miracle’s identity and features. The OTLand thread is the primary historical source for the public launch announcement. The public ranking is retained only as a discovery and activity reference. This attribution keeps <strong><em>Miracle 7.4 server status</em></strong> distinct from older records and promotional claims.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://www.miracle74.com/?subtopic=serverinfo" label="Official Server Info: rates, PvP, host & schedule" />
              <SourceLink href="https://miracle74.com/?subtopic=aboutus" label="Official About Us: 7.4 mechanics & identity" />
              <SourceLink href="https://miracle74.com/?subtopic=gamefeatures" label="Official Game Features: custom systems & professions" />
              <SourceLink href="https://otland.net/threads/usa-7-4-miracle-launch-on-may-28th.289134/" label="OTLand: May 2024 launch announcement" />
            </div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current claims should be supported by an operator-controlled page, a dated official announcement, or a clearly labeled live observation. This page does not promote unverified mirrors, unsupported gameplay rumors, or stale activity snapshots as current facts.</p></div>
          </section>

          <section className="cyntara-wiki__recommended" aria-label="Related server guides"><h3>Compare server styles</h3><p>Explore the directory for other old-school, real-map, and custom-server profiles before choosing a world.</p><div className="flex flex-wrap gap-3"><a className="cyntara-wiki__button" href="/servers/demolidores">Demolidores guide</a><a className="cyntara-wiki__button" href="/servers/rubinot">RubinOT guide</a><a className="cyntara-wiki__button" href="/?search=7.4">Browse 7.4 servers</a></div></section>

          <section id="external-links"><SectionHeading>External links</SectionHeading><ul>{externalLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Miracle 7.4</div><ServerLogo server={{ name: 'Miracle 7.4', slug: 'miracle74', host: 'go.miracle74.com' }} size="profile" /><table><tbody>
            <tr><th>Category</th><td>Long-term 7.4 Open Tibia</td></tr><tr><th>Host</th><td><code>go.miracle74.com:7171</code></td></tr><tr><th>Version</th><td>7.4</td></tr><tr><th>Rates</th><td>1× EXP, magic, skills, loot & spawn</td></tr><tr><th>PvP</th><td>PvP</td></tr><tr><th>Host signal</th><td>USA</td></tr><tr><th>Server save</th><td>05:00 GMT-3</td></tr><tr><th>Map clean</th><td>Monday</td></tr><tr><th>Custom layer</th><td>Relics, Bestiary, Charms & professions</td></tr><tr><th>Launch record</th><td>May 2024</td></tr><tr><th>Website</th><td><a href="https://www.miracle74.com/" target="_blank" rel="nofollow noopener noreferrer">miracle74.com</a></td></tr>
          </tbody></table></div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Verify the current client and connection information on the official domain. The launch thread is historical evidence, not a live software source.</p><a href="https://miracle74.com/?Pv3LvL=WStBm&subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">Official downloads</a></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare protocol, PvP type, rates, region, uptime, and current activity across Open Tibia worlds.</p><a className="cyntara-wiki__button" href="/?search=Miracle">Browse similar servers</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function FactCard({ label, text }) { return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>; }
function Table({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</span></ExternalLink>; }
