import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-server-chile');
}

export default function KasteriaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-server-chile" />;
}
