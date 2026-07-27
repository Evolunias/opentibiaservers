import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lucera-players');
}

export default function LuceraPlayersKeywordPage() {
  return <StaticKeywordPage slug="lucera-players" />;
}
