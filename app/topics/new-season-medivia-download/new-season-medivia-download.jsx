import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-download');
}

export default function NewSeasonMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-download" />;
}
