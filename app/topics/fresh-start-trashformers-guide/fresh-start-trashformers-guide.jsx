import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-guide');
}

export default function FreshStartTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-guide" />;
}
