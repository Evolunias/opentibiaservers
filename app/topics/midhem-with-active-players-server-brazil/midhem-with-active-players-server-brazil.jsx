import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-active-players-server-brazil');
}

export default function MidhemWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-active-players-server-brazil" />;
}
