import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-download');
}

export default function CurrentCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-download" />;
}
