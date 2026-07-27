import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-baiak-server');
}

export default function Midhem81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-baiak-server" />;
}
