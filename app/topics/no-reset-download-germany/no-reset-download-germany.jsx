import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-germany');
}

export default function NoResetDownloadGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-germany" />;
}
