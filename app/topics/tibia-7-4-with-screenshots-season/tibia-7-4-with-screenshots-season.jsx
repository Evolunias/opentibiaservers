import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-season');
}

export default function Tibia74WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-season" />;
}
