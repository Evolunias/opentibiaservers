import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-screenshots-discord');
}

export default function Tibia13WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-screenshots-discord" />;
}
