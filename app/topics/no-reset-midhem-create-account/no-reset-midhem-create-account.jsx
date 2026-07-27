import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-create-account');
}

export default function NoResetMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-create-account" />;
}
