import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-tibia",
  "slug": "tibia",
  "name": "Tibia",
  "host": "tibia.lt",
  "ip": "tibia.lt",
  "port": 7171,
  "location": "Lithuania",
  "version": "12",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 97,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/lithuania-12-87-tibia-real-map-start-date-07-08-2022-16-00-gtm-3.281846/",
  "source_url": "https://otland.net/threads/lithuania-12-87-tibia-real-map-start-date-07-08-2022-16-00-gtm-3.281846/",
  "website_url": "http://www.tibia.lt",
  "external_launch_url": "http://www.tibia.lt",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Tibia",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.139Z",
  "last_seen_at": "2022-07-31T11:27:13+0200",
  "last_check": "2026-07-28T02:51:27.139Z",
  "official_summary": "Tibia enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Lithuania, version hint: 12, server address: tibia.lt, port 7171, 18 replies, 4,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Tibia is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://www.tibia.lt",
    "Server address: tibia.lt",
    "Server port: 7171",
    "Thread author: Bandytojas",
    "Original post date: 7/31/2022",
    "Forum discussion: 18 replies",
    "Thread visibility: 4,000 views",
    "Parsed version/client hint: 12",
    "Parsed region hint: Lithuania"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Lithuania",
    "12",
    "Lithuania",
    "12.87",
    "Start date 07/08/2022 16:00 GTM+3"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://www.tibia.lt",
      "label": "Tibia official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/lithuania-12-87-tibia-real-map-start-date-07-08-2022-16-00-gtm-3.281846/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "http://www.tibia.lt",
      "label": "http://www.tibia.lt"
    }
  ],
  "faq_items": [
    {
      "question": "Is Tibia verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://www.tibia.lt as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Tibia?",
      "answer": "Start with http://www.tibia.lt and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Tibia exposes http://www.tibia.lt from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function TibiaServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
