import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-with-active-players-server');
}

export default function Realera81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-with-active-players-server" />;
}
