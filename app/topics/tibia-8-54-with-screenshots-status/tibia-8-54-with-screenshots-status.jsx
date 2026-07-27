import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-status');
}

export default function Tibia854WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-status" />;
}
