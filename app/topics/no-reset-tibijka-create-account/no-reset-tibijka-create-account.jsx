import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-create-account');
}

export default function NoResetTibijkaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-create-account" />;
}
