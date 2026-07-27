import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-argentina-server');
}

export default function AmeriaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-argentina-server" />;
}
