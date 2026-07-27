import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-download');
}

export default function LowrateTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-download" />;
}
