import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers');
}

export default function RealMapTrashformersKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers" />;
}
