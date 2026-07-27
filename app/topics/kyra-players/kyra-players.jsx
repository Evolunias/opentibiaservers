import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-players');
}

export default function KyraPlayersKeywordPage() {
  return <StaticKeywordPage slug="kyra-players" />;
}
