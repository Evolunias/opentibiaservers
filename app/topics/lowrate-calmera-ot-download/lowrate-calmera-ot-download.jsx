import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-download');
}

export default function LowrateCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-download" />;
}
