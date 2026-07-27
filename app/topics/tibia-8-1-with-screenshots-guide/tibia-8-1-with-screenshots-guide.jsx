import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-screenshots-guide');
}

export default function Tibia81WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-screenshots-guide" />;
}
