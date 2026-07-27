import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot');
}

export default function OldSchoolVenoreotKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot" />;
}
