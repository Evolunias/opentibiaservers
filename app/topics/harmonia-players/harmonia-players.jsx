import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-players');
}

export default function HarmoniaPlayersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-players" />;
}
