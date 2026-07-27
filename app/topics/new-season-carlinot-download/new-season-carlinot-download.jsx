import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-download');
}

export default function NewSeasonCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-download" />;
}
