import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-france');
}

export default function SeasonalDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-france" />;
}
