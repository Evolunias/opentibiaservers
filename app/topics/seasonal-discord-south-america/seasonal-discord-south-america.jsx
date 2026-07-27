import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-south-america');
}

export default function SeasonalDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-south-america" />;
}
