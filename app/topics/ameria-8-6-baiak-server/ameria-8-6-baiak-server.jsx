import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-baiak-server');
}

export default function Ameria86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-baiak-server" />;
}
