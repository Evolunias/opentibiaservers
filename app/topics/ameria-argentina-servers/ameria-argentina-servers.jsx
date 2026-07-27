import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-argentina-servers');
}

export default function AmeriaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-argentina-servers" />;
}
