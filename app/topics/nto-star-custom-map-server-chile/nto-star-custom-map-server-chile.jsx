import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-server-chile');
}

export default function NtoStarCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-server-chile" />;
}
