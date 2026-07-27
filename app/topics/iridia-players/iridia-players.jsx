import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-players');
}

export default function IridiaPlayersKeywordPage() {
  return <StaticKeywordPage slug="iridia-players" />;
}
