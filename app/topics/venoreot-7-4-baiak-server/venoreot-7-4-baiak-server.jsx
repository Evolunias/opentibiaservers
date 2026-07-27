import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-7-4-baiak-server');
}

export default function Venoreot74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-7-4-baiak-server" />;
}
