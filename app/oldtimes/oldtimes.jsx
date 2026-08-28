import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-oldtimes",
  "slug": "oldtimes",
  "name": "Oldtimes",
  "host": "oldtimes.sytes.net",
  "ip": "oldtimes.sytes.net",
  "port": null,
  "location": "Sweden",
  "version": "7.1",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 67,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://oldtimes.sytes.net",
  "external_launch_url": "https://oldtimes.sytes.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Oldtimes",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:27.651Z",
  "last_seen_at": "2013-02-01T01:46:48+0100",
  "last_check": "2026-07-28T02:51:27.651Z",
  "official_summary": "Oldtimes enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: Sweden, version hint: 7.1, server address: oldtimes.sytes.net, 716 replies, 75,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Oldtimes is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://oldtimes.sytes.net",
    "Server address: oldtimes.sytes.net",
    "Thread author: oldtimes",
    "Original post date: 2/1/2013",
    "Forum discussion: 716 replies",
    "Thread visibility: 75,000 views",
    "Parsed version/client hint: 7.1",
    "Parsed region hint: Sweden"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "Sweden",
    "7.1",
    "Sweden",
    "7.1"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://oldtimes.sytes.net",
      "label": "Oldtimes official website"
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
    }
  ],
  "faq_items": [
    {
      "question": "Is Oldtimes verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://oldtimes.sytes.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Oldtimes?",
      "answer": "Start with https://oldtimes.sytes.net and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Oldtimes exposes https://oldtimes.sytes.net from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function OldtimesPage() {
  return <CuratedGuideArticle page={page} />;
}
