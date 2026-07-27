import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-baiak-server');
}

export default function Midhem100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-baiak-server" />;
}
