import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-luminera-server');
}

export default function WithActivePlayersLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-luminera-server" />;
}
