import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-download');
}

export default function NoResetYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-download" />;
}
