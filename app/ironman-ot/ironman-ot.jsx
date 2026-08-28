import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-ironman-ot",
  "slug": "ironman-ot",
  "name": "Ironman OT",
  "host": "ironman-ot.party",
  "ip": "ironman-ot.party",
  "port": 7171,
  "location": "Germany",
  "version": "8.0",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 47,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://download.ironman-ot.party/",
  "external_launch_url": "https://download.ironman-ot.party/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Ironman OT",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2026-04-03T21:18:27+0200",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "Ironman OT enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8.0, server address: ironman-ot.party, port 7171, official website reachable during import, 15 replies, 15,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Ironman OT is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://download.ironman-ot.party/",
    "Official website responded with HTTP 200",
    "Server address: ironman-ot.party",
    "Server port: 7171",
    "Thread author: Knoothead",
    "Original post date: 4/4/2026",
    "Forum discussion: 15 replies",
    "Thread visibility: 15,000 views",
    "Parsed version/client hint: 8.0",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Germany",
    "8.0",
    "Germany",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://download.ironman-ot.party/",
      "label": "Ironman OT official website"
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
      "url": "https://download.ironman-ot.party/",
      "label": "https://download.ironman-ot.party/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Jagged",
      "label": "Jagged"
    }
  ],
  "faq_items": [
    {
      "question": "Is Ironman OT verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://download.ironman-ot.party/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Ironman OT?",
      "answer": "Start with https://download.ironman-ot.party/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Ironman OT exposes https://download.ironman-ot.party/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function IronmanOtPage() {
  return <CuratedGuideArticle page={page} />;
}
