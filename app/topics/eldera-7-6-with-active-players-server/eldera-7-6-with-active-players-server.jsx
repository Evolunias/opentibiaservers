import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-with-active-players-server');
}

export default function Eldera76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-with-active-players-server" />;
}
