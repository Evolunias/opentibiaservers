import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-6-baiak-server');
}

export default function Venoreot86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-6-baiak-server" />;
}
