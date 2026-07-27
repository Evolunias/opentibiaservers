import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-download');
}

export default function CurrentTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-download" />;
}
