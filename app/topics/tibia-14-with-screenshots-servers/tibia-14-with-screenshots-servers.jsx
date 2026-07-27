import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-servers');
}

export default function Tibia14WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-servers" />;
}
