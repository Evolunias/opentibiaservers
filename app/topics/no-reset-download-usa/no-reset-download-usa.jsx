import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-usa');
}

export default function NoResetDownloadUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-usa" />;
}
