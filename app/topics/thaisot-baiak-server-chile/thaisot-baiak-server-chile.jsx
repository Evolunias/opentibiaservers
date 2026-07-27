import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-chile');
}

export default function ThaisotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-chile" />;
}
