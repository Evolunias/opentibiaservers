import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-discord-sweden');
}

export default function SeasonalDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-discord-sweden" />;
}
