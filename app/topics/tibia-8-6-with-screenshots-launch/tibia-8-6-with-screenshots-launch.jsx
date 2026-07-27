import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-launch');
}

export default function Tibia86WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-launch" />;
}
