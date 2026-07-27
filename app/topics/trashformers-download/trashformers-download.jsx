import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-download');
}

export default function TrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="trashformers-download" />;
}
