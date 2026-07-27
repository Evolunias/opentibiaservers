import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-with-active-players-server');
}

export default function Realera100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-with-active-players-server" />;
}
