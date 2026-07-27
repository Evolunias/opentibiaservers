import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-create-account');
}

export default function OldSchoolVenoreotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-create-account" />;
}
