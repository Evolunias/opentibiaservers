import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-with-active-players-server');
}

export default function Luminera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-with-active-players-server" />;
}
