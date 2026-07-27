import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-with-players');
}

export default function FunServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="fun-server-with-players" />;
}
