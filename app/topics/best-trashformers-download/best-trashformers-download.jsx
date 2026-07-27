import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-download');
}

export default function BestTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-download" />;
}
