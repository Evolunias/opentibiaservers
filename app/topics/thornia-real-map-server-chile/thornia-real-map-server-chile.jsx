import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-real-map-server-chile');
}

export default function ThorniaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-real-map-server-chile" />;
}
