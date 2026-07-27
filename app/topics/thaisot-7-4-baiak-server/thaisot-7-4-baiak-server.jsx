import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-baiak-server');
}

export default function Thaisot74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-baiak-server" />;
}
