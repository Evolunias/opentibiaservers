import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-download');
}

export default function HighrateVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-download" />;
}
