import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-baiak-server');
}

export default function Thaisot13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-baiak-server" />;
}
