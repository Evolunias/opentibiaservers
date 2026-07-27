import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-with-active-players-server');
}

export default function Rubinot13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-with-active-players-server" />;
}
