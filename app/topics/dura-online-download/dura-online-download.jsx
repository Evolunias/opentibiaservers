import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-download');
}

export default function DuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="dura-online-download" />;
}
