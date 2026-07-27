import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-chile');
}

export default function NepreniaCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-chile" />;
}
