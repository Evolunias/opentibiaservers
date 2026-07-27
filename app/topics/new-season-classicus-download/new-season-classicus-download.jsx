import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-download');
}

export default function NewSeasonClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-download" />;
}
