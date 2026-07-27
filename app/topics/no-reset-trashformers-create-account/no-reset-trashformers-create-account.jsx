import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-create-account');
}

export default function NoResetTrashformersCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-create-account" />;
}
