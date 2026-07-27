import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-uk');
}

export default function EvoluniaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-uk" />;
}
