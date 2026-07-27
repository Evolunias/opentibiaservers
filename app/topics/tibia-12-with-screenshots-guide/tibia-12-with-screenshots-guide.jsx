import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-guide');
}

export default function Tibia12WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-guide" />;
}
