import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-screenshots-launch');
}

export default function Tibia100WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-screenshots-launch" />;
}
