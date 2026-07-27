import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-download');
}

export default function NewVenoreotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-download" />;
}
