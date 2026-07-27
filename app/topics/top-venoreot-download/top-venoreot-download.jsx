import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-download');
}

export default function TopVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-download" />;
}
