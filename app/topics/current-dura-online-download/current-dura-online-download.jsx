import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-download');
}

export default function CurrentDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-download" />;
}
