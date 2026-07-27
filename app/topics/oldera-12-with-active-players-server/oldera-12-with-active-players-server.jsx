import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-with-active-players-server');
}

export default function Oldera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-with-active-players-server" />;
}
