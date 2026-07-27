import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-create-account');
}

export default function CurrentOxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-create-account" />;
}
