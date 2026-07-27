import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-download');
}

export default function TopTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-download" />;
}
