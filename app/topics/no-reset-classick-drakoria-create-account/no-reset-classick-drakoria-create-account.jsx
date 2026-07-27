import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-create-account');
}

export default function NoResetClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-create-account" />;
}
