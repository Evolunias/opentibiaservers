import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-create-account');
}

export default function PopularTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-create-account" />;
}
