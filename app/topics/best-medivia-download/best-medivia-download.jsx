import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-medivia-download');
}

export default function BestMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-medivia-download" />;
}
