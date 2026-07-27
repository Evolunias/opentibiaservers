import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-create-account');
}

export default function ActiveVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-create-account" />;
}
