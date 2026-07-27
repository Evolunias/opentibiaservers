import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-screenshots-season');
}

export default function Tibia772WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-screenshots-season" />;
}
