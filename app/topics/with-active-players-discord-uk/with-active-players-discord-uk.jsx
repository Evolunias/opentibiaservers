import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-uk');
}

export default function WithActivePlayersDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-uk" />;
}
