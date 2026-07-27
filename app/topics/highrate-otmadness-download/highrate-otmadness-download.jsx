import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-download');
}

export default function HighrateOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-download" />;
}
