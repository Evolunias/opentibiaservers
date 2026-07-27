import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-download');
}

export default function NoResetMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-download" />;
}
