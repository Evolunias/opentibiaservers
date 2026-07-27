import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-seasonal-discord');
}

export default function Tibia1098SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-seasonal-discord" />;
}
