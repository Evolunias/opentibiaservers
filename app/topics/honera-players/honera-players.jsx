import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('honera-players');
}

export default function HoneraPlayersKeywordPage() {
  return <StaticKeywordPage slug="honera-players" />;
}
