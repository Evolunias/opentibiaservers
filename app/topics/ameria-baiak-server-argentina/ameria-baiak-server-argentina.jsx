import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-argentina');
}

export default function AmeriaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-argentina" />;
}
