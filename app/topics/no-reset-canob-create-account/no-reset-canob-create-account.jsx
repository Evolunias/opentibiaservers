import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-create-account');
}

export default function NoResetCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-create-account" />;
}
