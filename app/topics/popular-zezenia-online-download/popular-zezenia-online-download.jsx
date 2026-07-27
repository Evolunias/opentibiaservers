import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-download');
}

export default function PopularZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-download" />;
}
