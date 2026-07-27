import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-download');
}

export default function CurrentZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-download" />;
}
