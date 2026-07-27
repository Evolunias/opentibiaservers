import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-download');
}

export default function NoResetOxygenotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-download" />;
}
