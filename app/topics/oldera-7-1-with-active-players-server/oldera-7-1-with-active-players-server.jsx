import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-1-with-active-players-server');
}

export default function Oldera71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-1-with-active-players-server" />;
}
