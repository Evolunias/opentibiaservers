import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-mexico');
}

export default function AmeriaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-mexico" />;
}
