import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-download');
}

export default function Tibia86WithScreenshotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-download" />;
}
