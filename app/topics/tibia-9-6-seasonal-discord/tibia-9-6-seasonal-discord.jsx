import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-seasonal-discord');
}

export default function Tibia96SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-seasonal-discord" />;
}
