import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-baiak-server-germany');
}

export default function AmeriaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-baiak-server-germany" />;
}
