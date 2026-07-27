import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-with-active-players-server');
}

export default function Oldera15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-with-active-players-server" />;
}
