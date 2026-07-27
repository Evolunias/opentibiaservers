import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-season');
}

export default function Tibia11WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-season" />;
}
