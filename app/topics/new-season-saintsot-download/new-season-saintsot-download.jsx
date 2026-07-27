import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-download');
}

export default function NewSeasonSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-download" />;
}
