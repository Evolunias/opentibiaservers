import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-guide');
}

export default function RealMapTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-guide" />;
}
