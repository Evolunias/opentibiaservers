import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-screenshots-season');
}

export default function Tibia100WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-screenshots-season" />;
}
