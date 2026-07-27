import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-download');
}

export default function CustomVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-download" />;
}
