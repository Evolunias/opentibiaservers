import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-create-account');
}

export default function NoResetCyntaraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-create-account" />;
}
