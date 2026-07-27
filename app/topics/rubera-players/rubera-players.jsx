import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubera-players');
}

export default function RuberaPlayersKeywordPage() {
  return <StaticKeywordPage slug="rubera-players" />;
}
