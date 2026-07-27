import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-ot-server');
}

export default function OldSchoolVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-ot-server" />;
}
