import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('menera-players');
}

export default function MeneraPlayersKeywordPage() {
  return <StaticKeywordPage slug="menera-players" />;
}
