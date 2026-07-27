import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-create-account');
}

export default function FreshStartVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-create-account" />;
}
