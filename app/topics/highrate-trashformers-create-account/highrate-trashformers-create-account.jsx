import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-create-account');
}

export default function HighrateTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-create-account" />;
}
