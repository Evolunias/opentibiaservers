import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-official');
}

export default function OldSchoolVenoreotOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-official" />;
}
