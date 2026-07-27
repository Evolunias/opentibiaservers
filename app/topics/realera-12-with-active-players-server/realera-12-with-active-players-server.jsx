import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-with-active-players-server');
}

export default function Realera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-with-active-players-server" />;
}
