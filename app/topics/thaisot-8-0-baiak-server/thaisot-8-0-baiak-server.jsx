import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-0-baiak-server');
}

export default function Thaisot80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-0-baiak-server" />;
}
