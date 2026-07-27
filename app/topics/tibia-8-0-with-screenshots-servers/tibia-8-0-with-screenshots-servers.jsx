import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-with-screenshots-servers');
}

export default function Tibia80WithScreenshotsServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-with-screenshots-servers" />;
}
