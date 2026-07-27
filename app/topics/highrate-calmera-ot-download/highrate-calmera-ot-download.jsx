import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-download');
}

export default function HighrateCalmeraOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-download" />;
}
