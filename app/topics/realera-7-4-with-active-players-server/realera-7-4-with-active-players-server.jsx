import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-4-with-active-players-server');
}

export default function Realera74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-4-with-active-players-server" />;
}
