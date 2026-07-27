import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-download');
}

export default function LowrateVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-download" />;
}
