import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-mexico');
}

export default function WithDiscordPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-mexico" />;
}
