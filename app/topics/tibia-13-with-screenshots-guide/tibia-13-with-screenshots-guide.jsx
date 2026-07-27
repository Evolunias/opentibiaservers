import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-guide');
}

export default function Tibia13WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-guide" />;
}
