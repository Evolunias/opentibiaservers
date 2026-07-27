import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-baiak-server');
}

export default function Ameria80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-baiak-server" />;
}
