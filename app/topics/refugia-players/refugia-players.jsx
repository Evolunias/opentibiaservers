import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('refugia-players');
}

export default function RefugiaPlayersKeywordPage() {
  return <StaticKeywordPage slug="refugia-players" />;
}
