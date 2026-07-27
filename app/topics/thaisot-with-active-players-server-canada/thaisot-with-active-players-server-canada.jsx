import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-canada');
}

export default function ThaisotWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-canada" />;
}
