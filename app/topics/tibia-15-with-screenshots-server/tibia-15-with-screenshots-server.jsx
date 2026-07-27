import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-server');
}

export default function Tibia15WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-server" />;
}
