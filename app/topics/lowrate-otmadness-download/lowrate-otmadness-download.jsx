import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-download');
}

export default function LowrateOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-download" />;
}
