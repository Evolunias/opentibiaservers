import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-with-players');
}

export default function TibiaHighExpServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-with-players" />;
}
