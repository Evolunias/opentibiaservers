import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-evo-server-sweden');
}

export default function EvoluniaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-evo-server-sweden" />;
}
