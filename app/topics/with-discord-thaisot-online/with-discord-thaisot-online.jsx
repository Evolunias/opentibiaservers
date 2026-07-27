import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-online');
}

export default function WithDiscordThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-online" />;
}
