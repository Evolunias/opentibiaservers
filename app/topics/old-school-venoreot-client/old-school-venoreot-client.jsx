import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-client');
}

export default function OldSchoolVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-client" />;
}
