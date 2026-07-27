import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-create-account');
}

export default function ActiveTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-create-account" />;
}
