import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nova-players');
}

export default function NovaPlayersKeywordPage() {
  return <StaticKeywordPage slug="nova-players" />;
}
