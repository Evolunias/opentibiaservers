import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-create-account');
}

export default function BestTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-create-account" />;
}
