import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-guide');
}

export default function Tibia14WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-guide" />;
}
