import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-chile');
}

export default function TrashformersCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-chile" />;
}
