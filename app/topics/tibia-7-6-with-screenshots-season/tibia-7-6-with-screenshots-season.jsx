import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-screenshots-season');
}

export default function Tibia76WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-screenshots-season" />;
}
