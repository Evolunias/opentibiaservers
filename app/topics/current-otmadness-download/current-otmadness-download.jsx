import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-download');
}

export default function CurrentOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-download" />;
}
