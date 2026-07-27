import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-download');
}

export default function NewSeasonTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-download" />;
}
