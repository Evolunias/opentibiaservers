import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-download');
}

export default function TopDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-download" />;
}
