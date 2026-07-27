import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-create-account');
}

export default function NoResetNilotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-create-account" />;
}
