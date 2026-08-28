import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-tibiaorigins-2-0",
  "slug": "tibiaorigins-2-0",
  "name": "TibiaOrigins 2.0",
  "host": "tibiaorigins.com",
  "ip": "tibiaorigins.com",
  "port": 7171,
  "location": "USA",
  "version": "13.21",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 15,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://tibiaorigins.com/",
  "external_launch_url": "https://tibiaorigins.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "TibiaOrigins 2.0",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:23.278Z",
  "last_seen_at": "2025-11-07T17:07:24+0100",
  "last_check": "2026-07-28T02:51:23.278Z",
  "official_summary": "TibiaOrigins 2.0 enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 13.21, server address: tibiaorigins.com, port 7171, official website reachable during import, 98 replies, 12,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "TibiaOrigins 2.0 is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://tibiaorigins.com/",
    "Official website responded with HTTP 200",
    "Server address: tibiaorigins.com",
    "Server port: 7171",
    "Thread author: OriginsEcho",
    "Original post date: 11/8/2025",
    "Forum discussion: 98 replies",
    "Thread visibility: 12,000 views",
    "Parsed version/client hint: 13.21",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "13.21",
    "USA",
    "13.21"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://tibiaorigins.com/",
      "label": "TibiaOrigins 2.0 official website"
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
      "url": "https://tibiaorigins.com/",
      "label": "https://tibiaorigins.com/"
    },
    {
      "type": "source_link",
      "url": "https://www.virustotal.com/gui/search/52e0be3e07cd67dfad9a4860d640ce13",
      "label": "VirusTotal"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Dubii",
      "label": "Dubii"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Codinablack",
      "label": "Codinablack"
    }
  ],
  "faq_items": [
    {
      "question": "Is TibiaOrigins 2.0 verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://tibiaorigins.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm TibiaOrigins 2.0?",
      "answer": "Start with https://tibiaorigins.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "TibiaOrigins 2.0 exposes https://tibiaorigins.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Tibiaorigins20Page() {
  return <CuratedGuideArticle page={page} />;
}
