import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-create-account');
}

export default function NewVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-create-account" />;
}
