import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers');
}

export default function NewSeasonTrashformersKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers" />;
}
