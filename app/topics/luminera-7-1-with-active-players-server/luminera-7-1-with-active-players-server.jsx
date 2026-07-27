import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-with-active-players-server');
}

export default function Luminera71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-with-active-players-server" />;
}
