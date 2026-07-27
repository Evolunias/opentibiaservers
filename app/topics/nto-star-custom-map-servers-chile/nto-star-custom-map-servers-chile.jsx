import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-custom-map-servers-chile');
}

export default function NtoStarCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-custom-map-servers-chile" />;
}
