import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-online');
}

export default function WithDiscordNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-online" />;
}
