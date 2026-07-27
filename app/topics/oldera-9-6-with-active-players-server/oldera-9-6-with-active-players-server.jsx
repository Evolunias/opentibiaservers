import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-with-active-players-server');
}

export default function Oldera96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-with-active-players-server" />;
}
