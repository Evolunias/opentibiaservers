import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-create-account');
}

export default function PopularVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-create-account" />;
}
