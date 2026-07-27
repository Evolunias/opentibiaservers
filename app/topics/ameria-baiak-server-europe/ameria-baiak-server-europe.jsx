import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-europe');
}

export default function AmeriaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-europe" />;
}
