import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-brazil');
}

export default function AmeriaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-brazil" />;
}
