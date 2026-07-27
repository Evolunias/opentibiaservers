import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-usa');
}

export default function AmeriaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-usa" />;
}
