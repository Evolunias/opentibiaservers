import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-create-account');
}

export default function NoResetRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-create-account" />;
}
