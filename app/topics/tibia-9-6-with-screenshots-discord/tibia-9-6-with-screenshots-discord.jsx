import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-screenshots-discord');
}

export default function Tibia96WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-screenshots-discord" />;
}
