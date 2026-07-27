import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-website');
}

export default function OldSchoolVenoreotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-website" />;
}
