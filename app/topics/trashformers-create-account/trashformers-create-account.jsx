import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-create-account');
}

export default function TrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="trashformers-create-account" />;
}
