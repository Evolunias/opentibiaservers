import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-launch');
}

export default function Tibia854WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-launch" />;
}
