import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-screenshots-ot-server');
}

export default function Tibia15WithScreenshotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-screenshots-ot-server" />;
}
