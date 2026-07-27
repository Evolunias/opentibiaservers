import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-download');
}

export default function LowrateDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-download" />;
}
