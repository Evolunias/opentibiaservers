import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-servers');
}

export default function Tibia12WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-servers" />;
}
