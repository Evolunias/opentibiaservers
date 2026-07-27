import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-mexico');
}

export default function NoResetDownloadMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-mexico" />;
}
