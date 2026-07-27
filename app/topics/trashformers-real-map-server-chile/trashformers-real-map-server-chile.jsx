import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-chile');
}

export default function TrashformersRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-chile" />;
}
