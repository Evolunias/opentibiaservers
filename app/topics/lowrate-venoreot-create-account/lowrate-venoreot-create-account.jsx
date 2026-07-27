import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-create-account');
}

export default function LowrateVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-create-account" />;
}
