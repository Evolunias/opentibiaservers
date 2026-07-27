import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-ot-server');
}

export default function Tibia12WithScreenshotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-ot-server" />;
}
