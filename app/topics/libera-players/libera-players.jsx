import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('libera-players');
}

export default function LiberaPlayersKeywordPage() {
  return <StaticKeywordPage slug="libera-players" />;
}
