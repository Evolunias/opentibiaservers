import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-download');
}

export default function NewSeasonThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-download" />;
}
