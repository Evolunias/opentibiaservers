import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-baiak-server');
}

export default function Ameria11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-baiak-server" />;
}
