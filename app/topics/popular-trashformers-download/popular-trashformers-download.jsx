import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-download');
}

export default function PopularTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-download" />;
}
