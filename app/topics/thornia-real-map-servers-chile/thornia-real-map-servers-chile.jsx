import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-servers-chile');
}

export default function ThorniaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-servers-chile" />;
}
