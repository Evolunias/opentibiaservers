import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-with-active-players-server');
}

export default function Luminera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-with-active-players-server" />;
}
