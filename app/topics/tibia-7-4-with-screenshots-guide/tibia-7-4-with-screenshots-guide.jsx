import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-guide');
}

export default function Tibia74WithScreenshotsGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-guide" />;
}
