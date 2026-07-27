import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-screenshots-discord');
}

export default function Tibia14WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-screenshots-discord" />;
}
