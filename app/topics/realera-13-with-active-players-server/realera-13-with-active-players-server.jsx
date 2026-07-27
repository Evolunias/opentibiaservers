import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-with-active-players-server');
}

export default function Realera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-13-with-active-players-server" />;
}
