import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-12-with-active-players-server');
}

export default function Rubinot12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-12-with-active-players-server" />;
}
