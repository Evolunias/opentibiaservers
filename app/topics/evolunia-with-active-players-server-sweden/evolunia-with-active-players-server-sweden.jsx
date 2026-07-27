import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-active-players-server-sweden');
}

export default function EvoluniaWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-active-players-server-sweden" />;
}
