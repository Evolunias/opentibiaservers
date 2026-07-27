import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-download');
}

export default function NoResetClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-download" />;
}
