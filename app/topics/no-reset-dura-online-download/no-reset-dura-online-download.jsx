import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-download');
}

export default function NoResetDuraOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-download" />;
}
