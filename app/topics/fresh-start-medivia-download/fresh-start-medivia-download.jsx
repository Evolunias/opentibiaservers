import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-download');
}

export default function FreshStartMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-download" />;
}
