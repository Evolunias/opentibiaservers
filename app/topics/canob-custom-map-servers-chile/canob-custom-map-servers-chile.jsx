import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-chile');
}

export default function CanobCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-chile" />;
}
