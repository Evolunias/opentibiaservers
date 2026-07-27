import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-create-account');
}

export default function CustomVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-create-account" />;
}
