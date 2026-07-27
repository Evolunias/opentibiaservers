import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-baiak-server');
}

export default function Midhem86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-baiak-server" />;
}
