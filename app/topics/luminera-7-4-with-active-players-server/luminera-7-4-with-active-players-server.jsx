import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-with-active-players-server');
}

export default function Luminera74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-with-active-players-server" />;
}
