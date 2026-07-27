import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-argentina');
}

export default function SeasonalDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-argentina" />;
}
