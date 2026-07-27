import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-with-screenshots-server');
}

export default function Tibia1098WithScreenshotsServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-with-screenshots-server" />;
}
