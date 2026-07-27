import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-download');
}

export default function CustomCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-download" />;
}
