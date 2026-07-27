import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-uk');
}

export default function TibiaraWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-uk" />;
}
