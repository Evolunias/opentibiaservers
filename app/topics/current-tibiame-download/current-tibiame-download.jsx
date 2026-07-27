import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-download');
}

export default function CurrentTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-download" />;
}
