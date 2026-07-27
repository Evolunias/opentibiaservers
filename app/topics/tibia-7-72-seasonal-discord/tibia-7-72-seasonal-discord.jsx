import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-seasonal-discord');
}

export default function Tibia772SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-seasonal-discord" />;
}
