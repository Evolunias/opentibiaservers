import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trimera-players');
}

export default function TrimeraPlayersKeywordPage() {
  return <StaticKeywordPage slug="trimera-players" />;
}
