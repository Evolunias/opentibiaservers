import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-online');
}

export default function WithDiscordRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-online" />;
}
