import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-chile');
}

export default function MidhemBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-chile" />;
}
