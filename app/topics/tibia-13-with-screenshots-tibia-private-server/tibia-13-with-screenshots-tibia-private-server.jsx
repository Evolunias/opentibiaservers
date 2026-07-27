import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-tibia-private-server');
}

export default function Tibia13WithScreenshotsTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-tibia-private-server" />;
}
