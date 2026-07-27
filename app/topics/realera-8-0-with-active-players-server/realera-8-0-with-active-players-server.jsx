import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-with-active-players-server');
}

export default function Realera80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-with-active-players-server" />;
}
