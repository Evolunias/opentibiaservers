import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-download');
}

export default function OfficialZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-download" />;
}
