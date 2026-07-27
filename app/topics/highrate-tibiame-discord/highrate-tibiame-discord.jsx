import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-discord');
}

export default function HighrateTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-discord" />;
}
