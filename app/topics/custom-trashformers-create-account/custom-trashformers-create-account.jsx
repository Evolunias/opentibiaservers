import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-create-account');
}

export default function CustomTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-create-account" />;
}
