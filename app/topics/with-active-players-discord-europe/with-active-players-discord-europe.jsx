import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-europe');
}

export default function WithActivePlayersDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-europe" />;
}
