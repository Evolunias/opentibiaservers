import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-open-tibia-server');
}

export default function Tibia86WithScreenshotsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-open-tibia-server" />;
}
