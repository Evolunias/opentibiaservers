import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-seasonal-discord');
}

export default function Tibia76SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-seasonal-discord" />;
}
