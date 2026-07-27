import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-with-active-players-server');
}

export default function Luminera76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-with-active-players-server" />;
}
