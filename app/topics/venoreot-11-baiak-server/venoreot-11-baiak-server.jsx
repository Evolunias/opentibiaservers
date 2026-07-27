import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-baiak-server');
}

export default function Venoreot11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-baiak-server" />;
}
