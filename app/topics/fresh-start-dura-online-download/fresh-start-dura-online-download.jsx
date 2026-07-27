import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-download');
}

export default function FreshStartDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-download" />;
}
