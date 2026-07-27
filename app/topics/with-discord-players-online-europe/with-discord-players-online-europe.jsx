import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-europe');
}

export default function WithDiscordPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-europe" />;
}
