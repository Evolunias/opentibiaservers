import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-poland');
}

export default function SeasonalDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-poland" />;
}
