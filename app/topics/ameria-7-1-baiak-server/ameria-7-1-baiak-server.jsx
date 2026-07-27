import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-baiak-server');
}

export default function Ameria71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-baiak-server" />;
}
