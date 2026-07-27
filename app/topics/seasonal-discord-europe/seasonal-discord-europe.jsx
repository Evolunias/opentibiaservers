import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-europe');
}

export default function SeasonalDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-europe" />;
}
