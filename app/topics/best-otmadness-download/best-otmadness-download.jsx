import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-download');
}

export default function BestOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-download" />;
}
