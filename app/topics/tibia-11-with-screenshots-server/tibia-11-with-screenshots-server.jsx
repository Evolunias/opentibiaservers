import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-server');
}

export default function Tibia11WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-server" />;
}
