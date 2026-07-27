import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-download');
}

export default function BestTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-download" />;
}
