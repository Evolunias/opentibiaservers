import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-north-america');
}

export default function TrashformersCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-north-america" />;
}
