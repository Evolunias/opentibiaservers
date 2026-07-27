import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-download');
}

export default function ActiveOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-download" />;
}
