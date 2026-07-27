import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-with-players');
}

export default function MyaacWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="myaac-with-players" />;
}
