import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-download');
}

export default function NewSeasonNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-download" />;
}
