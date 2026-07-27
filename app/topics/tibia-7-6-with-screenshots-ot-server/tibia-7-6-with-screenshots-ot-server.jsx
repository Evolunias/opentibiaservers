import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-screenshots-ot-server');
}

export default function Tibia76WithScreenshotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-screenshots-ot-server" />;
}
