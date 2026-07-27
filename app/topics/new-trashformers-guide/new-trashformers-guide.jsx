import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-guide');
}

export default function NewTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-guide" />;
}
