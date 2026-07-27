import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-evo-server-sweden');
}

export default function EvoleraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-evo-server-sweden" />;
}
