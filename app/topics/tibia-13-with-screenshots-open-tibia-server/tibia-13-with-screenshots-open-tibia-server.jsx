import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-open-tibia-server');
}

export default function Tibia13WithScreenshotsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-open-tibia-server" />;
}
