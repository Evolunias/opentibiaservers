import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-with-active-players-server');
}

export default function Blazera11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-with-active-players-server" />;
}
