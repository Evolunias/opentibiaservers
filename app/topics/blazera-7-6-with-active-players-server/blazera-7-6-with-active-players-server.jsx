import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-with-active-players-server');
}

export default function Blazera76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-with-active-players-server" />;
}
