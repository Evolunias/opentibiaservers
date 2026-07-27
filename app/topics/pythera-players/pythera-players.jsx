import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pythera-players');
}

export default function PytheraPlayersKeywordPage() {
  return <StaticKeywordPage slug="pythera-players" />;
}
