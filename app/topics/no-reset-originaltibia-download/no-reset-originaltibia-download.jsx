import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-download');
}

export default function NoResetOriginaltibiaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-download" />;
}
