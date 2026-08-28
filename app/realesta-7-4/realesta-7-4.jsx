import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-realesta-7-4",
  "slug": "realesta-7-4",
  "name": "Realesta 7.4",
  "host": "Realesta74.net",
  "ip": "Realesta74.net",
  "port": 7175,
  "location": "USA",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 64,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://realesta74.net",
  "external_launch_url": "https://realesta74.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Realesta 7.4",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2019-04-18T23:26:36+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "Realesta 7.4 enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 7.4, server address: Realesta74.net, port 7175, 1,000 replies, 246,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Realesta 7.4 is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://realesta74.net",
    "Server address: Realesta74.net",
    "Server port: 7175",
    "Thread author: ruth",
    "Original post date: 4/19/2019",
    "Forum discussion: 1,000 replies",
    "Thread visibility: 246,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "7.4",
    "USA",
    "Custom",
    "February 20th at 20:00 CET"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://realesta74.net",
      "label": "Realesta 7.4 official website"
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
      "url": "https://realesta74.net",
      "label": "https://realesta74.net"
    }
  ],
  "faq_items": [
    {
      "question": "Is Realesta 7.4 verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://realesta74.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Realesta 7.4?",
      "answer": "Start with https://realesta74.net and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Realesta 7.4 exposes https://realesta74.net from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function Realesta74Page() {
  return <CuratedGuideArticle page={page} />;
}
