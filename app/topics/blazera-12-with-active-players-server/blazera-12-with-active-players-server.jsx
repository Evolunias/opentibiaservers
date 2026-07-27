import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-with-active-players-server');
}

export default function Blazera12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-with-active-players-server" />;
}
