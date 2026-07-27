import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-custom-map-servers-chile');
}

export default function KasteriaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-custom-map-servers-chile" />;
}
