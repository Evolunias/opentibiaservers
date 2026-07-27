import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-with-active-players-server');
}

export default function Rubinot15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-with-active-players-server" />;
}
