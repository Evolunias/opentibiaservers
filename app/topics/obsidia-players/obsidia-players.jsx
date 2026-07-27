import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-players');
}

export default function ObsidiaPlayersKeywordPage() {
  return <StaticKeywordPage slug="obsidia-players" />;
}
