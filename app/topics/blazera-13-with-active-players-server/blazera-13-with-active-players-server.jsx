import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-with-active-players-server');
}

export default function Blazera13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-with-active-players-server" />;
}
