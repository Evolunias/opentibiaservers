import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-evo-server-sweden');
}

export default function MiracleEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-evo-server-sweden" />;
}
