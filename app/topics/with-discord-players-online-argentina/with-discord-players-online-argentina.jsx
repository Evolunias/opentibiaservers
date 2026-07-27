import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-argentina');
}

export default function WithDiscordPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-argentina" />;
}
