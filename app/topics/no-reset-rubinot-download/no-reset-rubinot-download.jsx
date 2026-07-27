import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-download');
}

export default function NoResetRubinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-download" />;
}
