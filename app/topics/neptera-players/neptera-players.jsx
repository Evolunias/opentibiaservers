import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neptera-players');
}

export default function NepteraPlayersKeywordPage() {
  return <StaticKeywordPage slug="neptera-players" />;
}
