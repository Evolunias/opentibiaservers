import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-season');
}

export default function Tibia13WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-season" />;
}
