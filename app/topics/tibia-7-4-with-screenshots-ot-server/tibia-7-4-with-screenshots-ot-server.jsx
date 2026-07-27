import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-ot-server');
}

export default function Tibia74WithScreenshotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-ot-server" />;
}
