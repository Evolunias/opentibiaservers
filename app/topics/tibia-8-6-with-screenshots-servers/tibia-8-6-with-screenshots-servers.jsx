import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-screenshots-servers');
}

export default function Tibia86WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-screenshots-servers" />;
}
