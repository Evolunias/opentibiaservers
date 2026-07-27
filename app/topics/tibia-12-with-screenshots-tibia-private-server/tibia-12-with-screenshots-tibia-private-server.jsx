import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-tibia-private-server');
}

export default function Tibia12WithScreenshotsTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-tibia-private-server" />;
}
