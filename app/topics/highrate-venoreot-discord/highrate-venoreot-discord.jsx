import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-discord');
}

export default function HighrateVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-discord" />;
}
