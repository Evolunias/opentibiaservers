import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-download');
}

export default function PopularTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-download" />;
}
