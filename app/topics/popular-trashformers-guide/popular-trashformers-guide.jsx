import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-guide');
}

export default function PopularTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-guide" />;
}
