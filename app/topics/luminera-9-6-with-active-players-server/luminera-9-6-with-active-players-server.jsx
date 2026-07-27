import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-with-active-players-server');
}

export default function Luminera96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-with-active-players-server" />;
}
