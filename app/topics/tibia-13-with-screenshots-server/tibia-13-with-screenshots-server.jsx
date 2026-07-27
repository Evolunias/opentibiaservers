import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-server');
}

export default function Tibia13WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-server" />;
}
