import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-launch');
}

export default function Tibia13WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-launch" />;
}
