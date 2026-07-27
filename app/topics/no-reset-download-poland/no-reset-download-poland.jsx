import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-poland');
}

export default function NoResetDownloadPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-poland" />;
}
