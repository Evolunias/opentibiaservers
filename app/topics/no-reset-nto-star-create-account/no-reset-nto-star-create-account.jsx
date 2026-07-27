import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-create-account');
}

export default function NoResetNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-create-account" />;
}
