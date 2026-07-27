import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-chile');
}

export default function NtoStarRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-chile" />;
}
