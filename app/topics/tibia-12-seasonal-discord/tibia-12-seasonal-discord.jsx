import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-seasonal-discord');
}

export default function Tibia12SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-seasonal-discord" />;
}
