import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-create-account');
}

export default function NoResetBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-create-account" />;
}
