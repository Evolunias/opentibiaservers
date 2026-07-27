import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-download');
}

export default function NewSeasonMistOfDeathDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-download" />;
}
