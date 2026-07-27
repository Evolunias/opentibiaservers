import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-download');
}

export default function OldSchoolVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-download" />;
}
