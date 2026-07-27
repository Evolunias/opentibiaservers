import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-screenshots-guide');
}

export default function Tibia84WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-screenshots-guide" />;
}
