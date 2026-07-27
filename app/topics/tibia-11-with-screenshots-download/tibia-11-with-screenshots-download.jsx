import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-download');
}

export default function Tibia11WithScreenshotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-download" />;
}
