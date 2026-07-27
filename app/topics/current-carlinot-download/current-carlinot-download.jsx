import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-download');
}

export default function CurrentCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-download" />;
}
