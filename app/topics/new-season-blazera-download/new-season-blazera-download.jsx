import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-download');
}

export default function NewSeasonBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-download" />;
}
