import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-download');
}

export default function HighrateHarmoniaOtDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-download" />;
}
