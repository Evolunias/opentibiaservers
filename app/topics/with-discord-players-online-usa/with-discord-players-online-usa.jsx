import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-usa');
}

export default function WithDiscordPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-usa" />;
}
