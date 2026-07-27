import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-with-active-players-server');
}

export default function Luminera15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-with-active-players-server" />;
}
