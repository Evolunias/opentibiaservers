import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-mexico');
}

export default function WithActivePlayersDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-mexico" />;
}
