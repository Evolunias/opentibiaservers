import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-create-account');
}

export default function FreshStartTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-create-account" />;
}
