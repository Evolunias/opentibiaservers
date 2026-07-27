import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-canada');
}

export default function AmeriaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-canada" />;
}
