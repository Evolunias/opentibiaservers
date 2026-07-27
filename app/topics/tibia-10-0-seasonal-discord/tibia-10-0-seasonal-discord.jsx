import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-seasonal-discord');
}

export default function Tibia100SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-seasonal-discord" />;
}
