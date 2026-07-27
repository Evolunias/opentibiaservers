import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-download');
}

export default function FreshStartOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-download" />;
}
