import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-chile');
}

export default function VenoreotBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-chile" />;
}
