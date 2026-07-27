import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-download');
}

export default function NewSeasonArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-download" />;
}
