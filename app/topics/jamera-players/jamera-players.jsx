import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-players');
}

export default function JameraPlayersKeywordPage() {
  return <StaticKeywordPage slug="jamera-players" />;
}
