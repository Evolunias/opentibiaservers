import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-download');
}

export default function OtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="otmadness-download" />;
}
