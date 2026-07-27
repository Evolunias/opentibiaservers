import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-baiak-server');
}

export default function Ameria14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-baiak-server" />;
}
