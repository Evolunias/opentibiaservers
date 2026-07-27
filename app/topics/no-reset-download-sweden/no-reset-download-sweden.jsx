import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-sweden');
}

export default function NoResetDownloadSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-sweden" />;
}
