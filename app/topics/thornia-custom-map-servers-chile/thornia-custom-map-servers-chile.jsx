import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-chile');
}

export default function ThorniaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-chile" />;
}
