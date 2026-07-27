import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-usa');
}

export default function ThaisotWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-usa" />;
}
