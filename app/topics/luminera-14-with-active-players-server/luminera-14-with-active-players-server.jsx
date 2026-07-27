import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-with-active-players-server');
}

export default function Luminera14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-with-active-players-server" />;
}
