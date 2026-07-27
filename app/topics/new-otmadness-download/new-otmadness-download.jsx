import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-download');
}

export default function NewOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-download" />;
}
