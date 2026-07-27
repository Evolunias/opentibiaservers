import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-europe');
}

export default function EvoluniaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-europe" />;
}
