import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-with-active-players-server');
}

export default function Luminera80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-with-active-players-server" />;
}
