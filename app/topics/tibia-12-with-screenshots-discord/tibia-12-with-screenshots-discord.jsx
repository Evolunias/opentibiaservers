import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-screenshots-discord');
}

export default function Tibia12WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-screenshots-discord" />;
}
