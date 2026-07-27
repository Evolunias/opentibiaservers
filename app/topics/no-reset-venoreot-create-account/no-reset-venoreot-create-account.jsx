import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-create-account');
}

export default function NoResetVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-create-account" />;
}
