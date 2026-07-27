import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-latin-america');
}

export default function WithActivePlayersDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-latin-america" />;
}
