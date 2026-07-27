import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-download');
}

export default function FreshStartTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-download" />;
}
