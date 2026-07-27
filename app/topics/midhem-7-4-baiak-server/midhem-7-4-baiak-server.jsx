import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-baiak-server');
}

export default function Midhem74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-baiak-server" />;
}
