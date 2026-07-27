import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-poland');
}

export default function AmeriaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-poland" />;
}
