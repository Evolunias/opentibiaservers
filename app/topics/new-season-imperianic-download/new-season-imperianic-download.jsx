import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-download');
}

export default function NewSeasonImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-download" />;
}
