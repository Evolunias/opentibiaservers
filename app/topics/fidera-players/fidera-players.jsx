import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fidera-players');
}

export default function FideraPlayersKeywordPage() {
  return <StaticKeywordPage slug="fidera-players" />;
}
