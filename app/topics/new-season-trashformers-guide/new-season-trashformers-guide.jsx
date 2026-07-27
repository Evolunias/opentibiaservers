import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-guide');
}

export default function NewSeasonTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-guide" />;
}
