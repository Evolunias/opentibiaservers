import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('guardia-players');
}

export default function GuardiaPlayersKeywordPage() {
  return <StaticKeywordPage slug="guardia-players" />;
}
