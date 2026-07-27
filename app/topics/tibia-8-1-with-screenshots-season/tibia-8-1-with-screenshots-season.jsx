import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-screenshots-season');
}

export default function Tibia81WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-screenshots-season" />;
}
