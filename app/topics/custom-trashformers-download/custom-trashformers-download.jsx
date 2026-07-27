import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-download');
}

export default function CustomTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-download" />;
}
