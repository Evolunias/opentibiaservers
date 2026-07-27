import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-download');
}

export default function NewSeasonNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-download" />;
}
