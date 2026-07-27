import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-online');
}

export default function WithDiscordTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-online" />;
}
