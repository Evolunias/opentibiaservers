import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-blazera-real-map",
  "slug": "blazera-real-map",
  "name": "Blazera Real Map",
  "host": "blazera.net",
  "ip": "blazera.net",
  "port": 7171,
  "location": "CANADA",
  "version": "8.60",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 118,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-8-6-blazera-real-map-new-era-launch-14th-february-14-00-gmt-5.303894/",
  "source_url": "https://otland.net/threads/canada-8-6-blazera-real-map-new-era-launch-14th-february-14-00-gmt-5.303894/",
  "website_url": "https://blazera.net",
  "external_launch_url": "https://blazera.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Blazera Real Map",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2026-02-11T14:31:49+0100",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "Blazera Real Map enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: CANADA, version hint: 8.60, server address: blazera.net, port 7171, 6 replies, 933,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Blazera Real Map is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://blazera.net",
    "Server address: blazera.net",
    "Server port: 7171",
    "Thread author: Roddet",
    "Original post date: 2/11/2026",
    "Forum discussion: 6 replies",
    "Thread visibility: 933,000 views",
    "Parsed version/client hint: 8.60",
    "Parsed region hint: CANADA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "CANADA",
    "8.60",
    "CANADA",
    "8.6"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://blazera.net",
      "label": "Blazera Real Map official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-8-6-blazera-real-map-new-era-launch-14th-february-14-00-gmt-5.303894/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://blazera.net",
      "label": "https://blazera.net"
    }
  ],
  "faq_items": [
    {
      "question": "Is Blazera Real Map verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://blazera.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Blazera Real Map?",
      "answer": "Start with https://blazera.net and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Blazera Real Map exposes https://blazera.net from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
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

export default function BlazeraRealMapServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
