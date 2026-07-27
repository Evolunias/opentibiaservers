import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-real-map-servers-chile');
}

export default function CanobRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="canob-real-map-servers-chile" />;
}
