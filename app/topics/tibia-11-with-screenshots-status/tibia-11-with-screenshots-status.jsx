import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-status');
}

export default function Tibia11WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-status" />;
}
