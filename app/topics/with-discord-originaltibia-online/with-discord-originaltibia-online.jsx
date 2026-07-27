import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-online');
}

export default function WithDiscordOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-online" />;
}
