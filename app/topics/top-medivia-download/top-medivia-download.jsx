import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-medivia-download');
}

export default function TopMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-medivia-download" />;
}
