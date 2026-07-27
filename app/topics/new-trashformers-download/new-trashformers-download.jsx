import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-download');
}

export default function NewTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-download" />;
}
