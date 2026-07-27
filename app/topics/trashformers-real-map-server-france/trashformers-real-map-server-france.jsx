import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map-server-france');
}

export default function TrashformersRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map-server-france" />;
}
