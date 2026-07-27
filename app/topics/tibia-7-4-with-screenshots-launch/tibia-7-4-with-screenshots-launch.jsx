import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-launch');
}

export default function Tibia74WithScreenshotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-launch" />;
}
