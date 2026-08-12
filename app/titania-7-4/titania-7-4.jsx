import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-titania-7-4",
  "slug": "titania-7-4",
  "name": "Titania 7.4",
  "host": "titania74.online",
  "ip": "titania74.online",
  "port": 7171,
  "location": "GERMANY",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 92,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-custom-titania-7-4-long-term-start-may-29.304606/",
  "source_url": "https://otland.net/threads/germany-custom-titania-7-4-long-term-start-may-29.304606/",
  "website_url": "https://titania74.online",
  "external_launch_url": "https://titania74.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Titania 7.4",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.161Z",
  "last_seen_at": "2026-05-22T18:26:56+0200",
  "last_check": "2026-07-28T02:51:25.161Z",
  "official_summary": "Titania 7.4 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: GERMANY, version hint: 7.4, server address: titania74.online, port 7171, 25 replies, 3,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Titania 7.4 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://titania74.online",
    "Server address: titania74.online",
    "Server port: 7171",
    "Thread author: Suro22",
    "Original post date: 5/23/2026",
    "Forum discussion: 25 replies",
    "Thread visibility: 3,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: GERMANY"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "GERMANY",
    "7.4",
    "GERMANY",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://titania74.online",
      "label": "Titania 7.4 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-custom-titania-7-4-long-term-start-may-29.304606/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://titania74.online",
      "label": "https://titania74.online"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/a/7iTHeyv",
      "label": "https://imgur.com/a/7iTHeyv"
    }
  ],
  "faq_items": [
    {
      "question": "Is Titania 7.4 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://titania74.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Titania 7.4?",
      "answer": "Start with https://titania74.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Titania 7.4 exposes https://titania74.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/a/7iTHeyv. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function Titania74Page() {
  return <CuratedGuideArticle page={page} />;
}
