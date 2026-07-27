import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-online');
}

export default function WithDiscordYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-online" />;
}
