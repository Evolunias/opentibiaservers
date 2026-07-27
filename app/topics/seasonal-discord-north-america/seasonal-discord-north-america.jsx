import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-north-america');
}

export default function SeasonalDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-north-america" />;
}
