import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-chile');
}

export default function NepreniaCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-chile" />;
}
