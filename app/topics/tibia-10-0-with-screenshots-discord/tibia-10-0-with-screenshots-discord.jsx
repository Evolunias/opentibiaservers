import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-screenshots-discord');
}

export default function Tibia100WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-screenshots-discord" />;
}
