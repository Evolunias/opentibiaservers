import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & identity'],
  ['facts', 'Reference facts'],
  ['progression', 'Stamina, quests & completion'],
  ['rates', 'Rates, activity & record differences'],
  ['pvp', 'PvP, wars & historical features'],
  ['history', 'History & archive record'],
  ['connection', 'Client & connection safety'],
  ['comparison', 'Finding a comparable server'],
  ['sources', 'Sources & verification'],
  ['faq', 'Frequently asked questions'],
  ['external-links', 'External links'],
];

const factRows = [
  ['Project name', 'UnderWar 2.0', 'The operator site identifies the project by this name in its page metadata.'],
  ['Recorded login host', 'go.underwar.org:7171', 'The same endpoint appears in the OT Archive record and the TibiaOTList record. Confirm it on an operator-controlled page before connecting.'],
  ['Region signal', 'Brazil', 'Brazil is shown by the archive and public directory records; the official marketing is also in Portuguese.'],
  ['Client family', 'Tibia 8.6 / 8.60', 'Structured technical metadata in OT Archive and TibiaOTList identify this version family.'],
  ['PvP classification', 'PVP', 'A broad directory and archive classification, not a complete ruleset.'],
  ['Archive owner field', 'TGC', 'A value shown in OT Archive Server Info. It is not a current support-contact verification.'],
  ['Archive engine', 'UnderWar~W.G 0.5.0', 'The engine label and version shown in the OT Archive technical record.'],
  ['Archive map dimensions', '35,307 × 42,844', 'Map-size metadata in OT Archive; it does not supply a current route or town guide.'],
];

const staminaRows = [
  ['Stamina cadence', 'Experience and loot quantities are reduced every two hours.', 'Documented by the UnderWar Wiki as a unique stamina mechanic; the source does not publish the exact reduction formula.'],
  ['Quest completion', 'Completing quests grants bonus experience.', 'The Wiki describes a bonus after each quest completion, but does not give a complete quest list or per-quest reward table.'],
  ['Grinder', 'A label for players who do not use UnderWar quest, challenge, or experience/loot boosts.', 'A documented player-path label, not a formal class or vocation.'],
  ['Explorador', 'Up to 50% of quests and content; the source describes a permanent 50% experience honor.', 'Requirements and the exact scope of qualifying content should be checked against the active Wiki.'],
  ['Conquistador', '100% of quests and content; the source also describes a permanent 50% experience honor.', 'The source’s stated reward wording is preserved here; it does not explain how it interacts with the Explorador reward.'],
];

const rateRows = [
  ['OpenTibiaServers directory snapshot', '15× EXP · PVP · 8.6', '47 / 2,000 players, 98.94% uptime, rank #97', 'A profile-attached snapshot, useful for historical listing context rather than live status.'],
  ['OT Archive structured record', '30× EXP · PVP · 8.60', 'Host: go.underwar.org:7171', 'Archive metadata; the record displays an updated label of 03/05/26, 07:50 PM UTC, reproduced without assuming its date format.'],
  ['TibiaOTList structured table', '1× EXP · 20× skill · 6× magic · 1× loot · 1× spawn', '5 / 3,000 observed by the public listing', 'A dynamic third-party listing capture. Its player count and rate table can change independently of the operator.'],
  ['TibiaOTList promotional description', '100× EXP · 30× skill · 10× magic · 4× loot', 'Text references an update dated 08/02/2021', 'Conflicts with the same page’s structured rate table and belongs to a historical promotional description, not a current rate claim.'],
];

const historicalFeatures = [
  ['War & guild activity', 'WarPrivate, Guild Tournament, GuildPoints, guild formation, and wars are named in archived promotional text.'],
  ['Combat & map language', 'The description mentions 7.6 damage, strong spells, knights with UH, and improved/remastered global-map spawns.'],
  ['Activities', 'The historical description advertises 100+ automatic raids, 100+ quests, various events, in-game support, and a tutor group.'],
  ['Client & scale claims', 'An UnderWar client, 40,000+ spawns, 24-hour availability, and “no corruption” are listed as promotional claims.'],
];

const historyRows = [
  ['22 Dec 2014', 'Early community introduction', 'An imported community-archive owner excerpt attributes an introduction of a “brasilian ots named underwar oldwar” to Myssi Maron and mentions PvP from level 8. This is a dated historical account, not current rules.'],
  ['Archive record', 'UnderWar profile preserved', 'OT Archive records the host, 8.60 client family, PVP classification, 30× experience, engine label, map dimensions, and a Brazil flag.'],
  ['Undated promotional record', 'New season and reset language', 'The archive description says a new season had started, the world had been recently reset, and more changes were planned. No event date is attached to those claims.'],
  ['Undated promotional record', '677-player record claim', 'The archive description says “New record: 677 players are logged in” at 20:20. It does not provide a calendar date.'],
  ['Undated promotional record', '18 years online claim', 'The same description claims “UnderWar 18 anos online.” It is preserved as a server-supplied longevity claim, not an independently audited continuity record.'],
];

const faqs = [
  {
    question: 'What is UnderWar?',
    answer: 'UnderWar 2.0 is a Brazil-associated Open Tibia project positioned by its official site around Old Tibia, PvP, war, and RPG play. Archive and directory records associate it with go.underwar.org:7171 and the Tibia 8.6 / 8.60 family.',
  },
  {
    question: 'What UnderWar rates should players expect?',
    answer: 'The available records conflict: the local directory snapshot lists 15× experience, OT Archive lists 30× experience, and TibiaOTList’s structured table lists 1× experience, 20× skill, 6× magic, 1× loot, and 1× spawn. A separate historical promotional description lists yet another rate set. Confirm all active rates with the operator before starting.',
  },
  {
    question: 'Does UnderWar have quests and a stamina system?',
    answer: 'The UnderWar Wiki documents a stamina system that reduces experience and loot quantities every two hours, bonus experience for quest completion, and Explorer and Conqueror completion titles. The published pages do not provide a complete current quest or reward catalogue.',
  },
  {
    question: 'Is UnderWar online right now?',
    answer: 'This profile preserves source observations, not a permanent live-status guarantee. Check the official website and a current directory reading immediately before joining; player counts, capacity, hosts, and rates change over time.',
  },
  {
    question: 'What should I verify before downloading an UnderWar client?',
    answer: 'Start with underwar.org, then verify the active host and port, account path, supported client version, checksum or signed release, current rules, support channel, and anti-bot or multi-client policy. Avoid third-party download mirrors and do not disable security protections to run a client.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'UnderWar 2.0: Open Tibia Server Guide, Rates, Stamina, PvP and History',
      description: 'A source-aware UnderWar 2.0 reference covering the 8.60 PVP archive record, documented stamina mechanics, conflicting rate records, historical war features, and connection safety.',
      mainEntityOfPage: 'https://opentibiaservers.com/servers/underwar',
      author: { '@type': 'Organization', name: 'OpenTibiaServers' },
      publisher: { '@type': 'Organization', name: 'OpenTibiaServers' },
      about: { '@type': 'VideoGame', name: 'UnderWar 2.0' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function UnderwarWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="underwar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="cyntara-wiki__header">
        <h1>UnderWar 2.0</h1>
        <small>From OpenTibiaServers Wiki, the source-aware Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>UnderWar Open Tibia server</u></em></strong>, identified by its official site as <strong>UnderWar 2.0</strong>, is a Brazil-associated project positioned around <strong>Old Tibia</strong>, <strong>PvP</strong>, war, and RPG play. Its source trail combines the operator site and Wiki with archive and directory records for <code>go.underwar.org:7171</code>.</p>
              <p>This reference keeps each kind of evidence in its lane. The official project pages document the server’s identity and stamina-based quest loop; OT Archive preserves technical and historical metadata; public lists offer time-sensitive rate and player signals. Where those records disagree, the difference is shown instead of converted into an unsupported “current” fact.</p>
            </div>
            <div className="w-full shrink-0 md:w-64">
              <ServerLogo server={{ name: 'UnderWar', slug: 'underwar', host: 'go.underwar.org' }} size="profile" />
            </div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; identity</SectionHeading>
            <p>UnderWar presents itself in Portuguese as “the best of Old Tibia,” with a direct emphasis on <strong>war</strong>, <strong>PvP</strong>, and a “real RPG” experience. That positioning places the project closer to a classic-conflict server identity than to a generic custom-content label, although the official landing page does not publish a complete live ruleset, vocation guide, or rate table.</p>
            <p>The project also has a connected knowledge surface: <a href="https://www.underwar.online/stamina" target="_blank" rel="nofollow noopener noreferrer">UnderWar Wiki’s stamina guide</a> identifies its copyright holder as UnderWar ATS and links back to the operator domain. This makes the Wiki the best available source for its documented progression concepts, while the official site remains the authority for account, client, and current-service details.</p>
            <div className="cyntara-wiki__callout"><strong>Profile standard</strong><p>“Old Tibia,” war, and RPG describe UnderWar’s published identity. They do not independently verify a current reset cycle, client download, population, exact rates, anti-bot policy, or PvP penalties. Those changing fields require an active operator source.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>The table distinguishes stable archive identifiers from fields that should be verified immediately before play. It is designed to make the <strong>UnderWar server</strong> record useful without disguising a historical listing as a live audit.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Field</th><th>Recorded value</th><th>Evidence and context</th></tr></thead><tbody>{factRows.map(([field, value, context]) => <tr key={field}><th>{field}</th><td><strong>{value}</strong></td><td>{context}</td></tr>)}</tbody></table></div>
          </section>

          <section id="progression">
            <SectionHeading>Stamina, quests &amp; completion</SectionHeading>
            <p>UnderWar’s most specific documented gameplay loop is its <strong><em>stamina system</em></strong>. The UnderWar Wiki says experience and loot quantities are reduced every two hours, creating an incentive to balance ordinary grinding with quests, challenges, events, and other server content. It also says quest completion awards bonus experience.</p>
            <p>Rather than presenting this as a complete guide, the record below preserves what the Wiki actually names. It does not infer quest locations, eligibility, reward stacking, cooldowns, vocation balance, or a complete content checklist where the source does not supply them.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>System</th><th>Documented behavior</th><th>Verification note</th></tr></thead><tbody>{staminaRows.map(([name, behavior, note]) => <tr key={name}><th>{name}</th><td>{behavior}</td><td>{note}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>How the completion path reads</strong><p>The Wiki contrasts a “Grinder” route with completion-focused titles. Explorer is described for up to 50% of quests/content and Conqueror for 100%; both descriptions mention a permanent 50% experience honor. Confirm the current in-game implementation before planning a character around that wording.</p></div>
          </section>

          <section id="rates">
            <SectionHeading>Rates, activity &amp; record differences</SectionHeading>
            <p>Searches for <strong><em><u>UnderWar rates</u></em></strong> lead to incompatible answers. This is not a minor rounding issue: four public records use different experience values, and one third-party page conflicts with its own historical promotional description. The safe answer is that the current configuration must come from UnderWar’s active operator channels.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Source signal</th><th>Rates / profile</th><th>Activity or host signal</th><th>How to read it</th></tr></thead><tbody>{rateRows.map(([source, rates, signal, note]) => <tr key={source}><th>{source}</th><td>{rates}</td><td>{signal}</td><td>{note}</td></tr>)}</tbody></table></div>
            <p>For the same reason, historic players-online numbers should not be used to promise current activity. The archive’s <strong>677-player</strong> “new record” is undated; public directory counts are point-in-time readings; and the local directory snapshot is a captured profile signal rather than a live-monitor guarantee.</p>
          </section>

          <section id="pvp">
            <SectionHeading>PvP, wars &amp; historical features</SectionHeading>
            <p>UnderWar is consistently labeled <strong>PVP</strong>, and both its official positioning and preserved promotional material foreground war play. This establishes the server’s intended conflict-oriented identity, but it does not answer the practical questions that decide a character’s risk: skull mechanics, unjustified kills, death loss, banishment, level protection, guild-war rules, multi-client policy, automation, or transfers.</p>
            <p>The following features appear in a historical promotional description attached to a public listing. They are useful for understanding the project’s past public pitch, but none should be treated as a currently operating system unless a recent operator source confirms it.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Historical feature group</th><th>Preserved claim</th></tr></thead><tbody>{historicalFeatures.map(([group, description]) => <tr key={group}><th>{group}</th><td>{description}</td></tr>)}</tbody></table></div>
            <div className="cyntara-wiki__callout"><strong>Before choosing a PvP world</strong><p>Read the current operator rules for frag limits, skulls, death penalties, level protection, guild warfare, account sharing, macros, botting, multi-clienting, trading, donations, and enforcement. A PVP label communicates the broad mode—not its complete legal or combat framework.</p></div>
          </section>

          <section id="history">
            <SectionHeading>History &amp; archive record</SectionHeading>
            <p>UnderWar has a long public footprint, but its chronology is fragmentary. An early community introduction establishes a 2014-era OldWar/UnderWar identity, while the archive captures later technical details and promotional season language. Its claimed longevity should remain attributed until supported by a dated operator timeline.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>When</th><th>Record</th><th>What it establishes</th></tr></thead><tbody>{historyRows.map(([date, title, detail]) => <tr key={`${date}-${title}`}><th>{date}</th><td><strong>{title}</strong></td><td>{detail}</td></tr>)}</tbody></table></div>
            <p>The archive record is listed as added <strong>07/12/22, 09:09 PM</strong> and updated <strong>03/05/26, 07:50 PM UTC</strong>. The source’s displayed numeric date format is not explained, so those labels are reproduced exactly rather than silently translated into a calendar chronology.</p>
          </section>

          <section id="connection">
            <SectionHeading>Client &amp; connection safety</SectionHeading>
            <p>A reliable <strong>UnderWar download</strong> path has to come from the current operator. The official site confirms the project identity, while public records provide a historical host and an 8.6 / 8.60 client-family signal. Neither source, by itself, validates a specific launcher file or an account URL today.</p>
            <ol>
              <li>Begin at <a href="https://www.underwar.org/" target="_blank" rel="nofollow noopener noreferrer">underwar.org</a> and make sure account creation and downloads stay on an operator-controlled domain.</li>
              <li>Cross-check the active host, port, client version, launcher release notes, and any published checksum or signature against the official channel.</li>
              <li>Use the active rules and support surface to confirm PvP penalties, multi-clienting, automation, recovery, store, and payment policies before investing time or money.</li>
              <li>Avoid third-party client mirrors; do not disable operating-system or antivirus protections to force a launcher to run. Ask the operator for a documented, signed, or hashed release instead.</li>
              <li>Check live world status with more than one current source immediately before joining, because a directory row is a discovery aid—not a permanent service guarantee.</li>
            </ol>
          </section>

          <section id="comparison">
            <SectionHeading>Finding a comparable server</SectionHeading>
            <p>UnderWar’s archival profile is most useful for players seeking an <strong>8.60-era PvP</strong> identity with a war and Old Tibia emphasis. Compare rules, active rates, client trust, activity, and season plans directly rather than assuming that shared version or PvP labels mean equal gameplay.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <InternalCard href="/servers/demolidores" title="Demolidores" text="Another Brazil-associated 8.60 PVP archive profile with clearly separated historical and current-looking source signals." />
              <InternalCard href="/servers/rubinot" title="RubinOT" text="A multiworld network reference for players comparing several PvP modes and a broader documented systems catalogue." />
              <InternalCard href="/servers/cyntara" title="Cyntara" text="A custom-gameplay alternative for players who prefer bespoke progression systems over an Old Tibia-focused identity." />
            </div>
            <div className="cyntara-wiki__recommended"><h3>Compare directory records</h3><p>Use the directory to compare protocols, PvP types, location signals, recent availability, and source coverage across the Open Tibia landscape.</p><a className="cyntara-wiki__button" href="/?search=UnderWar">Browse comparable servers</a></div>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; verification</SectionHeading>
            <p>This page prioritizes official materials for current systems and uses public archives for historical facts. Directory sources are cited for discovery and comparison only. The sources below are intentionally separated so a player can see what each one can—and cannot—verify.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://www.underwar.org/" label="UnderWar official website" text="Official identity and current operator starting point." />
              <SourceLink href="https://www.underwar.online/stamina" label="UnderWar Wiki: Stamina System" text="Documented stamina, quest-bonus, and completion-title material." />
              <SourceLink href="https://www.underwar.online/explorador" label="UnderWar Wiki: Explorador" text="Completion-path details and source terminology." />
              <SourceLink href="https://otarchive.com/server/62cde2f41770eac22ec6ad58" label="OT Archive: UnderWar" text="Archive host, version, PvP, engine, map, and historical promotional record." />
              <SourceLink href="https://tibiaotlist.com/servers/go-underwar-org" label="TibiaOTList: go.underwar.org" text="Third-party host, version, activity, and conflicting structured/historical rate evidence." />
              <SourceLink href="/" label="OpenTibiaServers directory" text="Internal directory context and comparable server discovery." />
            </div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Use an operator-controlled page, dated announcement, signed client release, or clearly attributed in-game proof for a current claim. Archived promotion, historic screenshots, community accounts, and public lists remain valuable context, but they should never be silently upgraded into verified live rules.</p></div>
          </section>

          <section id="faq">
            <SectionHeading>Frequently asked questions</SectionHeading>
            <div className="space-y-3">{faqs.map(({ question, answer }) => <details key={question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer font-bold text-black">{question}</summary><p className="mt-3">{answer}</p></details>)}</div>
          </section>

          <section id="external-links">
            <SectionHeading>External links</SectionHeading>
            <ul>
              <li><ExternalLink href="https://www.underwar.org/">UnderWar official website</ExternalLink></li>
              <li><ExternalLink href="https://www.underwar.online/stamina">UnderWar Wiki: Stamina System</ExternalLink></li>
              <li><ExternalLink href="https://www.underwar.online/explorador">UnderWar Wiki: Explorador</ExternalLink></li>
              <li><ExternalLink href="https://otarchive.com/server/62cde2f41770eac22ec6ad58">OT Archive UnderWar record</ExternalLink></li>
              <li><ExternalLink href="https://tibiaotlist.com/servers/go-underwar-org">TibiaOTList UnderWar record</ExternalLink></li>
              <li><a href="/">OpenTibiaServers server directory</a></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">UnderWar 2.0</div>
            <ServerLogo server={{ name: 'UnderWar', slug: 'underwar', host: 'go.underwar.org' }} size="profile" />
            <table><tbody>
              <tr><th>Official name</th><td>UnderWar 2.0</td></tr>
              <tr><th>Website</th><td><ExternalLink href="https://www.underwar.org/">underwar.org</ExternalLink></td></tr>
              <tr><th>Recorded host</th><td><code>go.underwar.org:7171</code></td></tr>
              <tr><th>Region signal</th><td>Brazil</td></tr>
              <tr><th>Client family</th><td>8.6 / 8.60 archive record</td></tr>
              <tr><th>PvP</th><td>PVP classification</td></tr>
              <tr><th>Official identity</th><td>Old Tibia · War · RPG</td></tr>
              <tr><th>Documented system</th><td>Stamina and quest-completion titles</td></tr>
              <tr><th>Archive engine</th><td>UnderWar~W.G 0.5.0</td></tr>
              <tr><th>Rate status</th><td>Conflicting public records; verify live</td></tr>
              <tr><th>Profile status</th><td>Source-backed historical &amp; systems reference</td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Verify before playing</strong><p>Confirm the current account path, client, host, rates, rules, and support channel with UnderWar’s operator. Public listings help discovery but are not a substitute for live official information.</p><ExternalLink href="https://www.underwar.org/">Open official website</ExternalLink></div>
          <div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare UnderWar with other Open Tibia worlds by protocol, PvP type, region, activity signals, and source coverage.</p><a className="cyntara-wiki__button" href="/?search=UnderWar">Compare UnderWar</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function InternalCard({ href, title, text }) {
  return <a href={href} className="block rounded border border-black bg-white p-4 hover:no-underline"><h3 className="text-base font-bold text-black">{title}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p><span className="mt-3 inline-block font-bold">Read profile →</span></a>;
}

function ExternalLink({ href, children }) {
  return <a href={href} target="_blank" rel="nofollow noopener noreferrer">{children}</a>;
}

function SourceLink({ href, label, text }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined} className="block rounded border border-black bg-white p-4 hover:no-underline"><strong className="text-black">{label}</strong><span className="mt-1 block text-sm leading-6 text-black">{text}</span></a>;
}
