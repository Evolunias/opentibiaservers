import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-with-players');
}

export default function TibiaPrivateServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-with-players" />;
}
