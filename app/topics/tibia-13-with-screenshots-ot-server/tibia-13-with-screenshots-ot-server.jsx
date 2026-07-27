import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-ot-server');
}

export default function Tibia13WithScreenshotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-ot-server" />;
}
