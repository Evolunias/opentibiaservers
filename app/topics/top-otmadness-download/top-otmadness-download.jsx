import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-download');
}

export default function TopOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-download" />;
}
