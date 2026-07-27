import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-players');
}

export default function DanubiaPlayersKeywordPage() {
  return <StaticKeywordPage slug="danubia-players" />;
}
