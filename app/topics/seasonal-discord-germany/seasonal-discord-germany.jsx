import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-germany');
}

export default function SeasonalDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-germany" />;
}
