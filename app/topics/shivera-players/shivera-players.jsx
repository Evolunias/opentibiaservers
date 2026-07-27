import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shivera-players');
}

export default function ShiveraPlayersKeywordPage() {
  return <StaticKeywordPage slug="shivera-players" />;
}
