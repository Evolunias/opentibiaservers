import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-status');
}

export default function Tibia14WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-status" />;
}
