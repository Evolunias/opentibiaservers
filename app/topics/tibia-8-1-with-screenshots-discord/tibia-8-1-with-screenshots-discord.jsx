import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-screenshots-discord');
}

export default function Tibia81WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-screenshots-discord" />;
}
