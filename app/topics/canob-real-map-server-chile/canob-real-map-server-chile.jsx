import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-server-chile');
}

export default function CanobRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-server-chile" />;
}
