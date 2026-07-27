import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-download');
}

export default function NewSeasonOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-download" />;
}
