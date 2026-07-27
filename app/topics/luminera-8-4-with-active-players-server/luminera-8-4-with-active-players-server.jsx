import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-with-active-players-server');
}

export default function Luminera84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-with-active-players-server" />;
}
