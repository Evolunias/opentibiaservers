import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-with-screenshots-server');
}

export default function Tibia84WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-with-screenshots-server" />;
}
