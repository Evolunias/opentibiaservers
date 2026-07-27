import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-with-players');
}

export default function Tibia74ServerWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-with-players" />;
}
