import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-baiak-server');
}

export default function Venoreot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-baiak-server" />;
}
