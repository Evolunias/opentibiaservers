import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-servers-france');
}

export default function TrashformersRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-servers-france" />;
}
