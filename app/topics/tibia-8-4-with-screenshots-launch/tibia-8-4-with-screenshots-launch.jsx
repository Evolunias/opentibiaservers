import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-screenshots-launch');
}

export default function Tibia84WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-screenshots-launch" />;
}
