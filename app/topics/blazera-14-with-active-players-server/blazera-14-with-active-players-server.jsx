import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-with-active-players-server');
}

export default function Blazera14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-with-active-players-server" />;
}
