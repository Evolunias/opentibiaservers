import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-server-chile');
}

export default function NtoStarRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-server-chile" />;
}
