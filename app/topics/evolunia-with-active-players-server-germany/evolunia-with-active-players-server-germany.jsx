import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-germany');
}

export default function EvoluniaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-germany" />;
}
