import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-screenshots-servers');
}

export default function Tibia100WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-screenshots-servers" />;
}
