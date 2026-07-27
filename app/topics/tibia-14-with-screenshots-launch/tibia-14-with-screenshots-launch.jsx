import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-launch');
}

export default function Tibia14WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-launch" />;
}
