import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-status');
}

export default function Tibia74WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-status" />;
}
