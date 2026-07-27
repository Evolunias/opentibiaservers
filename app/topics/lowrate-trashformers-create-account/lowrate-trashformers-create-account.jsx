import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-create-account');
}

export default function LowrateTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-create-account" />;
}
