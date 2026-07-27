import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-baiak-server');
}

export default function Midhem96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-baiak-server" />;
}
