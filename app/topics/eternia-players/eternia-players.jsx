import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-players');
}

export default function EterniaPlayersKeywordPage() {
  return <StaticKeywordPage slug="eternia-players" />;
}
