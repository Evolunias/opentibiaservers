import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-canada');
}

export default function SeasonalDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-canada" />;
}
