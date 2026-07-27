import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-servers');
}

export default function Tibia11WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-servers" />;
}
