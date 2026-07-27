import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-season');
}

export default function Tibia12WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-season" />;
}
