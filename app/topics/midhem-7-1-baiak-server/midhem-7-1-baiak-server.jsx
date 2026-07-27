import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-baiak-server');
}

export default function Midhem71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-baiak-server" />;
}
