import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-with-players');
}

export default function TibiaOtServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-with-players" />;
}
