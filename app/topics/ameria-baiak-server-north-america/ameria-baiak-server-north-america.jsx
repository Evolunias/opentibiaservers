import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-north-america');
}

export default function AmeriaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-north-america" />;
}
