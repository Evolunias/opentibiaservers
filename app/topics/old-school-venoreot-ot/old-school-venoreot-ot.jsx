import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-ot');
}

export default function OldSchoolVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-ot" />;
}
