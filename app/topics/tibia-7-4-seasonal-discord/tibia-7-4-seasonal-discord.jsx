import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-seasonal-discord');
}

export default function Tibia74SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-seasonal-discord" />;
}
