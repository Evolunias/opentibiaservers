import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-sweden');
}

export default function AmeriaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-sweden" />;
}
