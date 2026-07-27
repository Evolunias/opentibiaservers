import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-baiak-server');
}

export default function Thaisot15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-baiak-server" />;
}
