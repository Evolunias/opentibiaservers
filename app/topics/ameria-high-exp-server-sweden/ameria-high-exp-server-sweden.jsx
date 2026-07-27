import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-high-exp-server-sweden');
}

export default function AmeriaHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-high-exp-server-sweden" />;
}
