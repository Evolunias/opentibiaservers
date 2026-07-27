import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-4-with-active-players-server');
}

export default function Realera84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-4-with-active-players-server" />;
}
