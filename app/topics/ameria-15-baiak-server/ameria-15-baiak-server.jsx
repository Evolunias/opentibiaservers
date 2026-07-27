import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-baiak-server');
}

export default function Ameria15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-baiak-server" />;
}
