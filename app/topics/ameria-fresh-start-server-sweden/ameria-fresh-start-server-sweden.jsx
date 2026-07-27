import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-fresh-start-server-sweden');
}

export default function AmeriaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-fresh-start-server-sweden" />;
}
