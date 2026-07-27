import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-baiak-server');
}

export default function Ameria96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-baiak-server" />;
}
