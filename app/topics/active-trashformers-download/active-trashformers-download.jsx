import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-download');
}

export default function ActiveTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-download" />;
}
