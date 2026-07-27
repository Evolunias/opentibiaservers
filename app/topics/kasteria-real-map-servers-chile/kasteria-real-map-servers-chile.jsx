import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map-servers-chile');
}

export default function KasteriaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map-servers-chile" />;
}
