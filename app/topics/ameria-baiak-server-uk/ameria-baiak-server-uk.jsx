import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-uk');
}

export default function AmeriaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-uk" />;
}
