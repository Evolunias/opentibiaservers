import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-download');
}

export default function ActiveVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-download" />;
}
