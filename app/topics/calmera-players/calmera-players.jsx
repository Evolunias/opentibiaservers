import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-players');
}

export default function CalmeraPlayersKeywordPage() {
  return <StaticKeywordPage slug="calmera-players" />;
}
