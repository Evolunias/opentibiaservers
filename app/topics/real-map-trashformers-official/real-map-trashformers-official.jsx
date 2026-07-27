import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-official');
}

export default function RealMapTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-official" />;
}
