import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-create-account');
}

export default function CurrentTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-create-account" />;
}
