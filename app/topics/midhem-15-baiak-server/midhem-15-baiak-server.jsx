import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-baiak-server');
}

export default function Midhem15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-baiak-server" />;
}
