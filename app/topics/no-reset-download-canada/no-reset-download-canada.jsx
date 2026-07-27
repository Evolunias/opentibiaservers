import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-canada');
}

export default function NoResetDownloadCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-canada" />;
}
