import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-with-active-players-server');
}

export default function Realera76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-with-active-players-server" />;
}
