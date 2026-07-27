import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-uk');
}

export default function SeasonalDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-uk" />;
}
