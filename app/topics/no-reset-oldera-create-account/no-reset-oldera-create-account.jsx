import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-create-account');
}

export default function NoResetOlderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-create-account" />;
}
