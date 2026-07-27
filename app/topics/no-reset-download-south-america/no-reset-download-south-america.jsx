import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-south-america');
}

export default function NoResetDownloadSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-south-america" />;
}
