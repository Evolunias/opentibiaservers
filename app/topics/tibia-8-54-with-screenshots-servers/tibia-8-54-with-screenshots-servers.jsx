import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-servers');
}

export default function Tibia854WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-servers" />;
}
