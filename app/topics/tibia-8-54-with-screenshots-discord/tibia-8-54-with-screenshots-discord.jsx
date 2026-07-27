import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-screenshots-discord');
}

export default function Tibia854WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-screenshots-discord" />;
}
