import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-baiak-server');
}

export default function Ameria76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-baiak-server" />;
}
