import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-launch');
}

export default function Tibia11WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-launch" />;
}
