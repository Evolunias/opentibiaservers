import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-chile');
}

export default function NepreniaRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-chile" />;
}
