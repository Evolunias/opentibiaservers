import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-players');
}

export default function ValoriaPlayersKeywordPage() {
  return <StaticKeywordPage slug="valoria-players" />;
}
