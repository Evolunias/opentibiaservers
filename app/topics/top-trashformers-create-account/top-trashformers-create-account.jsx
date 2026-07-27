import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-create-account');
}

export default function TopTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-create-account" />;
}
