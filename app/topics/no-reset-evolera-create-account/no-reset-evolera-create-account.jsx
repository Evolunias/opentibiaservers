import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-create-account');
}

export default function NoResetEvoleraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-create-account" />;
}
