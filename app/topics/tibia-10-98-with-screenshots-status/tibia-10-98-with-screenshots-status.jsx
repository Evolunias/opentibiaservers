import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-screenshots-status');
}

export default function Tibia1098WithScreenshotsStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-screenshots-status" />;
}
