import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-seasonal-discord');
}

export default function Tibia71SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-seasonal-discord" />;
}
