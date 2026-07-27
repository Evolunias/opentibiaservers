import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-baiak-server');
}

export default function Venoreot84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-baiak-server" />;
}
