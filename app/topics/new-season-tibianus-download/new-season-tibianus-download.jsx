import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-download');
}

export default function NewSeasonTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-download" />;
}
