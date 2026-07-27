import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('antica-players');
}

export default function AnticaPlayersKeywordPage() {
  return <StaticKeywordPage slug="antica-players" />;
}
