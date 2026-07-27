import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-brazil');
}

export default function NoResetDownloadBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-brazil" />;
}
