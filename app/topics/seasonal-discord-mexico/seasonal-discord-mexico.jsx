import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-mexico');
}

export default function SeasonalDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-mexico" />;
}
