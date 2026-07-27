import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-seasonal-discord');
}

export default function Tibia86SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-seasonal-discord" />;
}
