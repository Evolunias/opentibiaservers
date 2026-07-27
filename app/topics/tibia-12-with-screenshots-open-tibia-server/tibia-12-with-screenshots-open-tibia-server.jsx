import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-open-tibia-server');
}

export default function Tibia12WithScreenshotsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-open-tibia-server" />;
}
