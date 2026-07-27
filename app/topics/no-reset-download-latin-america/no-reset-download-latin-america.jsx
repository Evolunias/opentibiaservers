import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-latin-america');
}

export default function NoResetDownloadLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-latin-america" />;
}
