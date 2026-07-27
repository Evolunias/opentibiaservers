import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-download');
}

export default function Tibia12WithScreenshotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-download" />;
}
