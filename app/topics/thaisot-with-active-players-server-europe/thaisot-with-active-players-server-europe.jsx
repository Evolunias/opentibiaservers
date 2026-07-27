import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-europe');
}

export default function ThaisotWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-europe" />;
}
