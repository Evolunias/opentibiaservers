import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-download');
}

export default function NewSeasonKasteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-download" />;
}
