import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-download');
}

export default function HighrateTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-download" />;
}
