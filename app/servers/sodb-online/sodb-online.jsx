import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-sodb-online",
  "slug": "sodb-online",
  "name": "SODB Online",
  "host": "sodb.pl",
  "ip": "sodb.pl",
  "port": 7171,
  "location": "Germany",
  "version": "8.00",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 54,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-custom-sodb-online-dragon-ball-windows-android-ios-2k-graphics-custom-systems-custom-map-bot-start-06-03-2026.304055/",
  "source_url": "https://otland.net/threads/germany-custom-sodb-online-dragon-ball-windows-android-ios-2k-graphics-custom-systems-custom-map-bot-start-06-03-2026.304055/",
  "website_url": "https://sodb.pl",
  "external_launch_url": "https://sodb.pl",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "SODB Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2026-06-26T15:42:46+0200",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "SODB Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8.00, server address: sodb.pl, port 7171, official website reachable during import, 9 replies, 932 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "SODB Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://sodb.pl",
    "Official website responded with HTTP 200",
    "Server address: sodb.pl",
    "Server port: 7171",
    "Thread author: patrykq",
    "Original post date: 6/26/2026",
    "Forum discussion: 9 replies",
    "Thread visibility: 932 views",
    "Parsed version/client hint: 8.00",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "8.00",
    "Germany",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://sodb.pl",
      "label": "SODB Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-custom-sodb-online-dragon-ball-windows-android-ios-2k-graphics-custom-systems-custom-map-bot-start-06-03-2026.304055/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://sodb.pl",
      "label": "https://sodb.pl"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/jHgx6V9",
      "label": "https://imgur.com/jHgx6V9"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/j81sPWI",
      "label": "https://imgur.com/j81sPWI"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/8EoblDM",
      "label": "https://imgur.com/8EoblDM"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/OY4byeM",
      "label": "https://imgur.com/OY4byeM"
    },
    {
      "type": "source_link",
      "url": "https://imgur.com/SK2ZAhD",
      "label": "https://imgur.com/SK2ZAhD"
    }
  ],
  "faq_items": [
    {
      "question": "Is SODB Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://sodb.pl as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm SODB Online?",
      "answer": "Start with https://sodb.pl and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "SODB Online exposes https://sodb.pl from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://imgur.com/jHgx6V9, https://imgur.com/j81sPWI, https://imgur.com/8EoblDM, https://imgur.com/OY4byeM, https://imgur.com/SK2ZAhD. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function SodbOnlineServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
