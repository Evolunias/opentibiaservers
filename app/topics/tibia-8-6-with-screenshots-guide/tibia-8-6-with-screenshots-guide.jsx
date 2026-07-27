import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-guide');
}

export default function Tibia86WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-guide" />;
}
