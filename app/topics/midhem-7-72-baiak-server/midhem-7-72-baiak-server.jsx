import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-baiak-server');
}

export default function Midhem772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-baiak-server" />;
}
