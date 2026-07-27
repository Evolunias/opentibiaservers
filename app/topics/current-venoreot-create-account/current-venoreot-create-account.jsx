import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-create-account');
}

export default function CurrentVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-create-account" />;
}
