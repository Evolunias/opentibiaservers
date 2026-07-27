import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-baiak-server');
}

export default function Ameria74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-baiak-server" />;
}
