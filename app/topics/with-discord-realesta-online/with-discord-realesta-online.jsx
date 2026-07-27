import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-online');
}

export default function WithDiscordRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-online" />;
}
