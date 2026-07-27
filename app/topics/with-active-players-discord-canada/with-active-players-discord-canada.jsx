import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-canada');
}

export default function WithActivePlayersDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-canada" />;
}
