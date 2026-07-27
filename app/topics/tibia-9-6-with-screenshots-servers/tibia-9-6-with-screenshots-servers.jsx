import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-servers');
}

export default function Tibia96WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-servers" />;
}
