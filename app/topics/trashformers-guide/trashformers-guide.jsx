import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-guide');
}

export default function TrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="trashformers-guide" />;
}
