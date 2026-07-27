import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-create-account');
}

export default function NewOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-create-account" />;
}
