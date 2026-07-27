import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-download');
}

export default function TopTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-download" />;
}
