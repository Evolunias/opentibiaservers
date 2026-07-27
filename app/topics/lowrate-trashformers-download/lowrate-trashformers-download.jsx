import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-download');
}

export default function LowrateTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-download" />;
}
