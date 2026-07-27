import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-download');
}

export default function PopularVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-download" />;
}
