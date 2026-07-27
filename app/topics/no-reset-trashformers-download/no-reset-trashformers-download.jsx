import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-download');
}

export default function NoResetTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-download" />;
}
