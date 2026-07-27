import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-brazil');
}

export default function ThaisotWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-brazil" />;
}
