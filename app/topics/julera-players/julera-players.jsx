import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('julera-players');
}

export default function JuleraPlayersKeywordPage() {
  return <StaticKeywordPage slug="julera-players" />;
}
