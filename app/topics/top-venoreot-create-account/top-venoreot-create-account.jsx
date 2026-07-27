import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-create-account');
}

export default function TopVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-create-account" />;
}
