import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-real-map');
}

export default function TrashformersRealMapKeywordPage() {
  return <StaticKeywordPage slug="trashformers-real-map" />;
}
