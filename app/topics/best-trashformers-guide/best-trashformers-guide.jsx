import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-guide');
}

export default function BestTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-guide" />;
}
