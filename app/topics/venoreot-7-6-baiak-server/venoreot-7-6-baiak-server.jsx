import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-6-baiak-server');
}

export default function Venoreot76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-6-baiak-server" />;
}
