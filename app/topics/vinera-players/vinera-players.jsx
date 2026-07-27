import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('vinera-players');
}

export default function VineraPlayersKeywordPage() {
  return <StaticKeywordPage slug="vinera-players" />;
}
