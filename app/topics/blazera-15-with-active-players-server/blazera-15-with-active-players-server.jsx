import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-with-active-players-server');
}

export default function Blazera15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-with-active-players-server" />;
}
