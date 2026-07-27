import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-download');
}

export default function OfficialOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-download" />;
}
