import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-download');
}

export default function NewSeasonClassickDrakoriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-download" />;
}
