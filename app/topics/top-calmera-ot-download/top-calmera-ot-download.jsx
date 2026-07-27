import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-download');
}

export default function TopCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-download" />;
}
