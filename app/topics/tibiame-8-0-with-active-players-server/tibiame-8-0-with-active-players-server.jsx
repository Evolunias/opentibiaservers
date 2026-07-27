import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-0-with-active-players-server');
}

export default function Tibiame80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-0-with-active-players-server" />;
}
