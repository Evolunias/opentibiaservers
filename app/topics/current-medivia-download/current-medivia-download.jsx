import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-download');
}

export default function CurrentMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-download" />;
}
