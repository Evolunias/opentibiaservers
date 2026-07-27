import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-usa');
}

export default function SeasonalDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-usa" />;
}
