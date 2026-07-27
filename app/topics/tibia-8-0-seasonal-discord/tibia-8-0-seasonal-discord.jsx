import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-seasonal-discord');
}

export default function Tibia80SeasonalDiscordKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-seasonal-discord" />;
}
