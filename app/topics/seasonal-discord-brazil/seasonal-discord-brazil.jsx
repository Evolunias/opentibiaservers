import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-brazil');
}

export default function SeasonalDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-brazil" />;
}
