import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-baiak-server');
}

export default function Midhem80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-baiak-server" />;
}
