import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-screenshots-download');
}

export default function Tibia71WithScreenshotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-screenshots-download" />;
}
