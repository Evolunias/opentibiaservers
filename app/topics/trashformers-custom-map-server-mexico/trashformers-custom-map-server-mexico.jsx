import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-mexico');
}

export default function TrashformersCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-mexico" />;
}
