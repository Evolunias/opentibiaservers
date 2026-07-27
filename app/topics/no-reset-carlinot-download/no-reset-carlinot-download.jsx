import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-download');
}

export default function NoResetCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-download" />;
}
