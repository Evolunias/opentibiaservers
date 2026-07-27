import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-download');
}

export default function FreshStartCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-download" />;
}
