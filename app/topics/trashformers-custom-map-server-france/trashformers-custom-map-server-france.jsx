import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-server-france');
}

export default function TrashformersCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-server-france" />;
}
