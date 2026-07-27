import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-open-tibia-server');
}

export default function Tibia14WithScreenshotsOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-open-tibia-server" />;
}
