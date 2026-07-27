import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-launch');
}

export default function Tibia15WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-launch" />;
}
