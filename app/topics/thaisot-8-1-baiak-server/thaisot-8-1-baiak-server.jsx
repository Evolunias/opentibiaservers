import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-1-baiak-server');
}

export default function Thaisot81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-1-baiak-server" />;
}
