import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-guide');
}

export default function Tibia11WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-guide" />;
}
