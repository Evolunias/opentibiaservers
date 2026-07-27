import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-download');
}

export default function NewSeasonTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-download" />;
}
