import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-server-chile');
}

export default function KasteriaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-server-chile" />;
}
