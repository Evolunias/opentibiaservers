import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-online');
}

export default function WithDiscordNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-online" />;
}
