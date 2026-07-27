import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-download');
}

export default function ActiveZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-download" />;
}
