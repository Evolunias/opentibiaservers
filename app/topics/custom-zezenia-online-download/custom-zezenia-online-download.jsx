import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zezenia-online-download');
}

export default function CustomZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-zezenia-online-download" />;
}
