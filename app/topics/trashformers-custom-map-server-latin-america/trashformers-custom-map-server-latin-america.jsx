import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-latin-america');
}

export default function TrashformersCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-latin-america" />;
}
