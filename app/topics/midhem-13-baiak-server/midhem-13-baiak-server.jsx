import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-baiak-server');
}

export default function Midhem13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-baiak-server" />;
}
