import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-baiak-server');
}

export default function Midhem11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-baiak-server" />;
}
