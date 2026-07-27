import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-chile');
}

export default function NepreniaRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-chile" />;
}
