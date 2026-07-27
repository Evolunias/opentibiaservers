import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-players');
}

export default function MorganaPlayersKeywordPage() {
  return <StaticKeywordPage slug="morgana-players" />;
}
