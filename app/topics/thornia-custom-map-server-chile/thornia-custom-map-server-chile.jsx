import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-chile');
}

export default function ThorniaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-chile" />;
}
