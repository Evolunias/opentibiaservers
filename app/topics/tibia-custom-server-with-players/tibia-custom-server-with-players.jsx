import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-with-players');
}

export default function TibiaCustomServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-with-players" />;
}
