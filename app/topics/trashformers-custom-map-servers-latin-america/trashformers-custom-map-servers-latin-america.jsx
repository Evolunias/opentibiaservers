import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-latin-america');
}

export default function TrashformersCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-latin-america" />;
}
