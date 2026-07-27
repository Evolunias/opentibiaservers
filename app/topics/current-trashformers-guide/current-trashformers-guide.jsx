import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-guide');
}

export default function CurrentTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-guide" />;
}
