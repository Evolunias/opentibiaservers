import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-create-account');
}

export default function NewSeasonTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-create-account" />;
}
