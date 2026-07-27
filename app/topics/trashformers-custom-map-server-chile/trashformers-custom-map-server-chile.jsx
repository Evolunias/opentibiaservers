import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-chile');
}

export default function TrashformersCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-chile" />;
}
