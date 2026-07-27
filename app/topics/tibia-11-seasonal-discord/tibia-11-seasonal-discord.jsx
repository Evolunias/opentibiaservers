import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-seasonal-discord');
}

export default function Tibia11SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-seasonal-discord" />;
}
