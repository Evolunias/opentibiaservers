import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-baiak-server');
}

export default function Venoreot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-baiak-server" />;
}
