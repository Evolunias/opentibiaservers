import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-download');
}

export default function NoResetVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-download" />;
}
