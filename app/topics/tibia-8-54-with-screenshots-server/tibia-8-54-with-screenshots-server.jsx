import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-server');
}

export default function Tibia854WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-server" />;
}
