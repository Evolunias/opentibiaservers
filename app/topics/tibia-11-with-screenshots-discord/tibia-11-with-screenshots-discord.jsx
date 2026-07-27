import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-screenshots-discord');
}

export default function Tibia11WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-screenshots-discord" />;
}
