import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-north-america');
}

export default function NoResetDownloadNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-north-america" />;
}
