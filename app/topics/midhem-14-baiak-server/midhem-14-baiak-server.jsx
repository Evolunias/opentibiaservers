import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-baiak-server');
}

export default function Midhem14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-baiak-server" />;
}
