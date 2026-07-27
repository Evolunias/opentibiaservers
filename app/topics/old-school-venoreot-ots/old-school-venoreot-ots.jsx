import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-ots');
}

export default function OldSchoolVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-ots" />;
}
