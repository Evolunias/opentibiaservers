import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-cronfun",
  "slug": "cronfun",
  "name": "CronFUN",
  "host": "www.CronFUN.com",
  "ip": "www.CronFUN.com",
  "port": 7171,
  "location": "POLAND",
  "version": "7.60",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 34,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://cronfun.com/",
  "external_launch_url": "https://cronfun.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "CronFUN",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2026-02-05T22:03:16+0100",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "CronFUN enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: POLAND, version hint: 7.60, server address: www.CronFUN.com, port 7171, official website reachable during import, 28 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "CronFUN is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://cronfun.com/",
    "Official website responded with HTTP 200",
    "Server address: www.CronFUN.com",
    "Server port: 7171",
    "Thread author: Norbix",
    "Original post date: 2/6/2026",
    "Forum discussion: 28 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 7.60",
    "Parsed region hint: POLAND"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "POLAND",
    "7.60",
    "POLAND",
    "7.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://cronfun.com/",
      "label": "CronFUN official website"
    },
    {
      "type": "community_forum",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive thread"
    },
    {
      "type": "forum_index",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive forum"
    },
    {
      "type": "source_link",
      "url": "https://cronfun.com/",
      "label": "https://cronfun.com/"
    },
    {
      "type": "source_link",
      "url": "http://www.cronfun.com",
      "label": "www.CronFUN.com"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/368afde11802c10c19ec3dc4766cc65d",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/c48bda03b2535aab5fbe753e0a806f65",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/b61bedbb6191315607bd58587c47d5f2",
      "label": "VirusTotal"
    }
  ],
  "faq_items": [
    {
      "question": "Is CronFUN verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://cronfun.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm CronFUN?",
      "answer": "Start with https://cronfun.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "CronFUN exposes https://cronfun.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this community_archive source matters",
      "body": "community_archive server launch archive is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function CronfunPage() {
  return <CuratedGuideArticle page={page} />;
}
