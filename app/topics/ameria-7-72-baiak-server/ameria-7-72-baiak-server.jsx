import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-baiak-server');
}

export default function Ameria772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-baiak-server" />;
}
