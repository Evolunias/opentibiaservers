import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-guide');
}

export default function CustomTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-guide" />;
}
