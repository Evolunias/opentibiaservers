import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-download');
}

export default function CurrentVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-download" />;
}
