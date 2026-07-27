import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-custom-map-servers-france');
}

export default function TrashformersCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-custom-map-servers-france" />;
}
