import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-brazil');
}

export default function EvoluniaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-brazil" />;
}
