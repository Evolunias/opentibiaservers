import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-download');
}

export default function CustomOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-download" />;
}
