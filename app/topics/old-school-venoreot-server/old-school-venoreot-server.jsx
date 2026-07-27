import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-server');
}

export default function OldSchoolVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-server" />;
}
