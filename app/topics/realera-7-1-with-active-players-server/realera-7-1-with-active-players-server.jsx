import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-with-active-players-server');
}

export default function Realera71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-with-active-players-server" />;
}
