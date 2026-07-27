import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-mexico');
}

export default function TrashformersCustomMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-mexico" />;
}
