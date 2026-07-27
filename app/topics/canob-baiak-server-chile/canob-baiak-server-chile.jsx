import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-baiak-server-chile');
}

export default function CanobBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-baiak-server-chile" />;
}
