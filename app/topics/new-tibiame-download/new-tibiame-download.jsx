import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-download');
}

export default function NewTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-download" />;
}
