import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-screenshots-season');
}

export default function Tibia80WithScreenshotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-screenshots-season" />;
}
