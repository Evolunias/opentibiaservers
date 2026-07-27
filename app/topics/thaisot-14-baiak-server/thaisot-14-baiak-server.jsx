import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-baiak-server');
}

export default function Thaisot14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-baiak-server" />;
}
