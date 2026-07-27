import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-screenshots-discord');
}

export default function Tibia74WithScreenshotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-screenshots-discord" />;
}
