import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-usa');
}

export default function EvoluniaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-usa" />;
}
