import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-download');
}

export default function CustomDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-download" />;
}
