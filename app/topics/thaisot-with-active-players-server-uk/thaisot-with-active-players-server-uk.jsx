import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-uk');
}

export default function ThaisotWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-uk" />;
}
