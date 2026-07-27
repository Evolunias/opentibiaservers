import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-create-account');
}

export default function NoResetElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-create-account" />;
}
