import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-usa');
}

export default function WithActivePlayersDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-usa" />;
}
