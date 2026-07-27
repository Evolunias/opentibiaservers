import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-download');
}

export default function NewSeasonTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-download" />;
}
