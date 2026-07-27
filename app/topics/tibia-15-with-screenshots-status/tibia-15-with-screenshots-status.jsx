import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-status');
}

export default function Tibia15WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-status" />;
}
