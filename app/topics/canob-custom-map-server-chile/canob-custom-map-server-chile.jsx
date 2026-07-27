import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-chile');
}

export default function CanobCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-chile" />;
}
