import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-baiak-server');
}

export default function Midhem76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-baiak-server" />;
}
