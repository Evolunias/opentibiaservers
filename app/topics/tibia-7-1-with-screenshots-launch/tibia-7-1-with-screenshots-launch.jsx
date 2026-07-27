import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-screenshots-launch');
}

export default function Tibia71WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-screenshots-launch" />;
}
