import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-latin-america');
}

export default function SeasonalDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-latin-america" />;
}
