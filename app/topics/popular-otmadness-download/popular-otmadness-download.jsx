import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-download');
}

export default function PopularOtmadnessDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-download" />;
}
