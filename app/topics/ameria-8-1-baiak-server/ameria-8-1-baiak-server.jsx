import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-baiak-server');
}

export default function Ameria81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-baiak-server" />;
}
