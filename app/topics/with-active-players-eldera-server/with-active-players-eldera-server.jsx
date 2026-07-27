import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-eldera-server');
}

export default function WithActivePlayersElderaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-eldera-server" />;
}
