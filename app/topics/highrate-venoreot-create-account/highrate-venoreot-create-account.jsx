import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-create-account');
}

export default function HighrateVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-create-account" />;
}
