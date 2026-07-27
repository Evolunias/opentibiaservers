import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('astera-players');
}

export default function AsteraPlayersKeywordPage() {
  return <StaticKeywordPage slug="astera-players" />;
}
