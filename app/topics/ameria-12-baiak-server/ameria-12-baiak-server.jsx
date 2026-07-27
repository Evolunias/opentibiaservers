import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-baiak-server');
}

export default function Ameria12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-baiak-server" />;
}
