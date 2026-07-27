import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-online');
}

export default function WithDiscordOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-online" />;
}
