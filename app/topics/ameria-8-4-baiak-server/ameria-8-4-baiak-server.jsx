import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-baiak-server');
}

export default function Ameria84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-baiak-server" />;
}
