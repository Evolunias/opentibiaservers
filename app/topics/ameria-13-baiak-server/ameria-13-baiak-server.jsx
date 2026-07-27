import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-baiak-server');
}

export default function Ameria13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-baiak-server" />;
}
