import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-baiak-server');
}

export default function Ameria100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-baiak-server" />;
}
