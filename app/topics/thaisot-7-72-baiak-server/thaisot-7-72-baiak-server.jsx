import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-72-baiak-server');
}

export default function Thaisot772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-72-baiak-server" />;
}
