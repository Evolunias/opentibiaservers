import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-players');
}

export default function SoleraPlayersKeywordPage() {
  return <StaticKeywordPage slug="solera-players" />;
}
