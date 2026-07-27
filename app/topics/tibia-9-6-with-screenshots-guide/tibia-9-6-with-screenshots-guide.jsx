import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-guide');
}

export default function Tibia96WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-guide" />;
}
