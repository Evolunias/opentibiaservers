import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-download');
}

export default function NewSeasonVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-download" />;
}
