import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-dura-online-download');
}

export default function ActiveDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-dura-online-download" />;
}
