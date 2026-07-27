import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-create-account');
}

export default function BestVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-create-account" />;
}
