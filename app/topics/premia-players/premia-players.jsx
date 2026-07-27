import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('premia-players');
}

export default function PremiaPlayersKeywordPage() {
  return <StaticKeywordPage slug="premia-players" />;
}
