import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-ameria-server');
}

export default function WithActivePlayersAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-ameria-server" />;
}
