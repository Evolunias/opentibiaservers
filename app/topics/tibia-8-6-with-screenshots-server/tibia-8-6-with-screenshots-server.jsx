import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-server');
}

export default function Tibia86WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-server" />;
}
