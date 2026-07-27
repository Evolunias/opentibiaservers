import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-uk');
}

export default function NoResetDownloadUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-uk" />;
}
