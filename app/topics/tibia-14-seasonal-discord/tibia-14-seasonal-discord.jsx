import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-seasonal-discord');
}

export default function Tibia14SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-seasonal-discord" />;
}
