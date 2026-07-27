import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-launch');
}

export default function Tibia96WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-launch" />;
}
