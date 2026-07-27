import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-create-account');
}

export default function NoResetRealeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-create-account" />;
}
