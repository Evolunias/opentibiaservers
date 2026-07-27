import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-download');
}

export default function PopularDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-download" />;
}
