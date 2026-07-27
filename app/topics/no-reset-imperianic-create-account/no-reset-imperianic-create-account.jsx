import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-create-account');
}

export default function NoResetImperianicCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-create-account" />;
}
