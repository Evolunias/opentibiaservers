import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-download');
}

export default function OfficialTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-download" />;
}
