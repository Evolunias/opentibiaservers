import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-create-account');
}

export default function NewTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-create-account" />;
}
