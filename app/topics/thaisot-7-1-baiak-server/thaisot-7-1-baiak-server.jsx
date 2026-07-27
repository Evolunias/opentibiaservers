import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-baiak-server');
}

export default function Thaisot71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-baiak-server" />;
}
