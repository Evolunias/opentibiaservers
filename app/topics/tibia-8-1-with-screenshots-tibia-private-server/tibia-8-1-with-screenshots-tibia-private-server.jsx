import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-screenshots-tibia-private-server');
}

export default function Tibia81WithScreenshotsTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-screenshots-tibia-private-server" />;
}
