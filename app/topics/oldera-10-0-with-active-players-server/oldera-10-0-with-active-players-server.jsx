import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-with-active-players-server');
}

export default function Oldera100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-with-active-players-server" />;
}
