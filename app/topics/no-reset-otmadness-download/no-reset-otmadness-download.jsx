import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-download');
}

export default function NoResetOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-download" />;
}
