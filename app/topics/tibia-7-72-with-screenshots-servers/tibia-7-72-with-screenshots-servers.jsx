import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-screenshots-servers');
}

export default function Tibia772WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-screenshots-servers" />;
}
