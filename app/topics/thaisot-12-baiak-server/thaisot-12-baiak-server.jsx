import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-baiak-server');
}

export default function Thaisot12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-baiak-server" />;
}
