import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-download');
}

export default function BestDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-download" />;
}
