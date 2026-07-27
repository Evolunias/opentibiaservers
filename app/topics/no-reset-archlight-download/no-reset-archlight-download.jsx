import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-download');
}

export default function NoResetArchlightDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-download" />;
}
