import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-blacktalon-online",
  "slug": "blacktalon-online",
  "name": "BlackTalon Online",
  "host": "blacktalon.online",
  "ip": "blacktalon.online",
  "port": 7171,
  "location": "CANADA",
  "version": "10.98",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 74,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-custom-blacktalon-online-official-launch-july-23rd-7-pm-gmt-2.277271/",
  "source_url": "https://otland.net/threads/canada-custom-blacktalon-online-official-launch-july-23rd-7-pm-gmt-2.277271/",
  "website_url": "http://blacktalon.online/",
  "external_launch_url": "http://blacktalon.online/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "BlackTalon Online",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2021-07-17T01:24:39+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "BlackTalon Online enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: CANADA, version hint: 10.98, server address: blacktalon.online, port 7171, 157 replies, 37,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "BlackTalon Online is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://blacktalon.online/",
    "Server address: blacktalon.online",
    "Server port: 7171",
    "Thread author: Niloahs",
    "Original post date: 7/17/2021",
    "Forum discussion: 157 replies",
    "Thread visibility: 37,000 views",
    "Parsed version/client hint: 10.98",
    "Parsed region hint: CANADA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "CANADA",
    "10.98",
    "CANADA",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://blacktalon.online/",
      "label": "BlackTalon Online official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-custom-blacktalon-online-official-launch-july-23rd-7-pm-gmt-2.277271/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "http://blacktalon.online/",
      "label": "http://blacktalon.online/"
    },
    {
      "type": "source_link",
      "url": "https://www.facebook.com/blacktalon.otserv/photos/a.140156971484004/179779974188370",
      "label": "https://www.facebook.com/blacktalon.otserv/photos/a.140156971484004/179779974188370"
    }
  ],
  "faq_items": [
    {
      "question": "Is BlackTalon Online verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://blacktalon.online/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm BlackTalon Online?",
      "answer": "Start with http://blacktalon.online/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "BlackTalon Online exposes http://blacktalon.online/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function BlacktalonOnlineServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
