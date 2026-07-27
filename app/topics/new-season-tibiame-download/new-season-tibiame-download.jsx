import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-download');
}

export default function NewSeasonTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-download" />;
}
