import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-login');
}

export default function OldSchoolVenoreotLoginKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-login" />;
}
