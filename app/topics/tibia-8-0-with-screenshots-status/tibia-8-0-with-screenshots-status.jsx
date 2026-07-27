import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-screenshots-status');
}

export default function Tibia80WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-screenshots-status" />;
}
