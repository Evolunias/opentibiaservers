import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-guide');
}

export default function TopTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-guide" />;
}
