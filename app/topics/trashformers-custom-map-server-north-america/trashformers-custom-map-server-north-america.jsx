import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-north-america');
}

export default function TrashformersCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-north-america" />;
}
