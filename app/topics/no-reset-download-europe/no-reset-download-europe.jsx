import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-europe');
}

export default function NoResetDownloadEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-europe" />;
}
